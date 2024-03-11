/* eslint-disable @next/next/no-img-element */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getImageURL } from "@/lib/supabase/actions";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const FileUploadDropzone = ({ multiple = "false", images, setImages }) => {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDragEnter = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(true);
  }, []);

  const handleDragLeave = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
  }, []);

  const handleDragOver = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!dragging) setDragging(true);
    },
    [dragging]
  );

  const handleDrop = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
    const newFiles = Array.from(event.dataTransfer.files).map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    try {
      handleFileUpload(newFiles);
    } catch (error) {
      toast.error("Failed to upload image:", error);
    }
  }, []);

  function handleFileUpload(newFiles = []) {
    newFiles.forEach(async (file) => {
      const res = await uploadImage(file);
      if (res) {
        toast.success(`Image ${file.name} uploaded successfully`);
        console.log("res", res);
        const { publicUrl } = await getImageURL(res.path);
        if (publicUrl) {
          console.log("publicUrl", publicUrl);
          setImages((prevImages) => [
            ...prevImages,
            {
              name: file.name,
              path: res.path,
              fullPath: res.fullPath,
              preview: `${publicUrl}?width=100&height=100`,
              publicUrl: publicUrl,
            },
          ]);
        }
      }
    });
  }

  const handleChange = (event) => {
    if (!event.target.files || event.target.files.length == 0) {
      throw "You must select an image to upload.";
    }

    const newFiles = Array.from(event.target.files).map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    try {
      handleFileUpload(newFiles);
    } catch (error) {
      toast.error("Failed to upload image:", error);
    }
  };

  const [initialImagesLoaded, setInitialImagesLoaded] = useState(false);

  useEffect(() => {
    if (images.length > 0 && !initialImagesLoaded) {
      setFiles(images);
      setInitialImagesLoaded(true);
    }
  }, []);

  // Render file names or previews
  const renderImagePreviews = files.map(
    (file) => (
      (
        <div key={file.name+Date.now()} className="w-20 text-xs">
          <img
            src={file.preview}
            className="object-cover w-20 h-20 border rounded-md aspect-square"
            alt="Preview"
          />
          <p className="truncate">{file.name}</p>
        </div>
      )
    )
  );

  // Cleanup
  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <div
      className={cn("col-span-full", `dropzone ${dragging ? "dragging" : ""}`)}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center gap-1 px-6 py-6 text-sm border border-dashed rounded-lg">
        <ImageIcon alt="image" size={40} strokeWidth={1} aria-hidden="true" />
        <Label
          htmlFor="file-upload"
          className="relative flex font-semibold rounded-md cursor-pointer text-primary bg-background focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary/90"
        >
          <span>Upload a file</span>
          <Input
            id="file-upload"
            name="file-upload"
            type="file"
            multiple={multiple}
            onChange={handleChange}
            className="sr-only"
          />
          <p className="pl-1 font-normal text-foreground">or drag and drop</p>
        </Label>

        <p className="text-xs leading-5 text-muted-foreground">
          PNG, JPG, GIF up to 10MB
        </p>
      </div>
      <div className="py-2">
        {files.length > 0 && (
          <ul className="flex flex-wrap gap-1">{renderImagePreviews}</ul>
        )}
      </div>
    </div>
  );
};

async function uploadImage(file) {
  const supabase = createClient();

  const fileExt = file.name.split(".").pop();
  const fileName = `${Math.floor(Math.random() * 1000000000)}.${fileExt}`;
  const filePath = `product/${fileName}`;

  try {
    const { data, error: uploadError } = await supabase.storage
      .from("images")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Failed to upload product image:", error);
    throw error;
  }
}

export default FileUploadDropzone;
