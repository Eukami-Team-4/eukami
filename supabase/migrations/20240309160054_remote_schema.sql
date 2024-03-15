create schema if not exists "Eukami_v1";

create table "Eukami_v1"."Admin_User" (
    "staff_ID" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "firstName" character varying not null,
    "surname" character varying not null,
    "email" character varying not null,
    "address" character varying not null
);


alter table "Eukami_v1"."Admin_User" enable row level security;

create table "Eukami_v1"."Bank_account" (
    "customer_ID" bigint not null,
    "created_at" timestamp with time zone not null default now(),
    "sort_code" character varying not null,
    "account_number" character varying not null
);


alter table "Eukami_v1"."Bank_account" enable row level security;

create table "Eukami_v1"."Collection" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "image" json,
    "description" character varying,
    "name" text default ''::text
);


alter table "Eukami_v1"."Collection" enable row level security;

create table "Eukami_v1"."Customer" (
    "Customer_id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "firstName" character varying not null,
    "lastName" character varying not null,
    "email" character varying not null,
    "address" character varying not null
);


alter table "Eukami_v1"."Customer" enable row level security;

create table "Eukami_v1"."Order" (
    "customer" bigint not null,
    "created_at" timestamp with time zone not null default now(),
    "product" bigint not null,
    "billing_address" character varying not null
);


alter table "Eukami_v1"."Order" enable row level security;

create table "Eukami_v1"."Product" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "name" character varying not null,
    "description" text,
    "price" double precision not null default '0'::double precision,
    "collection_id" bigint,
    "availableForSale" boolean not null default true,
    "salePrice" double precision,
    "skew" character varying
);


alter table "Eukami_v1"."Product" enable row level security;

create table "Eukami_v1"."Product_Image" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "image_url" json,
    "product_id" bigint not null
);


alter table "Eukami_v1"."Product_Image" enable row level security;

create table "Eukami_v1"."Product_Modification" (
    "staff_ID" bigint not null,
    "created_at" timestamp with time zone not null default now(),
    "product_ID" bigint not null
);


alter table "Eukami_v1"."Product_Modification" enable row level security;

create table "Eukami_v1"."Review" (
    "customer_ID" bigint not null,
    "created_at" timestamp with time zone not null default now(),
    "product_ID" bigint not null,
    "rating" bigint not null
);


alter table "Eukami_v1"."Review" enable row level security;

create table "Eukami_v1"."Saved_Item" (
    "customer_ID" bigint not null,
    "created_at" timestamp with time zone not null default now(),
    "product_ID" bigint not null
);


alter table "Eukami_v1"."Saved_Item" enable row level security;

CREATE UNIQUE INDEX "Bank_account_account_number_key" ON "Eukami_v1"."Bank_account" USING btree (account_number);

CREATE UNIQUE INDEX "Bank_account_customer_ID_key" ON "Eukami_v1"."Bank_account" USING btree ("customer_ID");

CREATE UNIQUE INDEX "Bank_account_pkey" ON "Eukami_v1"."Bank_account" USING btree ("customer_ID", sort_code);

CREATE UNIQUE INDEX "Bank_account_sort_code_key" ON "Eukami_v1"."Bank_account" USING btree (sort_code);

CREATE UNIQUE INDEX "Collections_collection_ID_key" ON "Eukami_v1"."Collection" USING btree (id);

CREATE UNIQUE INDEX "Collections_pkey" ON "Eukami_v1"."Collection" USING btree (id);

CREATE UNIQUE INDEX "Customer_email_key" ON "Eukami_v1"."Customer" USING btree (email);

CREATE UNIQUE INDEX "Customer_pkey" ON "Eukami_v1"."Customer" USING btree ("Customer_id");

CREATE UNIQUE INDEX "Order_pkey" ON "Eukami_v1"."Order" USING btree (customer, product);

CREATE UNIQUE INDEX "Orders_customer_ID_key" ON "Eukami_v1"."Order" USING btree (customer);

CREATE UNIQUE INDEX "Orders_product_ID_key" ON "Eukami_v1"."Order" USING btree (product);

CREATE UNIQUE INDEX "Product_Image_Product_ID_key" ON "Eukami_v1"."Product_Image" USING btree (product_id);

CREATE UNIQUE INDEX "Product_Image_image_ID_key" ON "Eukami_v1"."Product_Image" USING btree (id);

CREATE UNIQUE INDEX "Product_Image_pkey" ON "Eukami_v1"."Product_Image" USING btree (id);

CREATE UNIQUE INDEX "Product_Modification_pkey" ON "Eukami_v1"."Product_Modification" USING btree ("staff_ID", "product_ID");

CREATE UNIQUE INDEX "Product_Modification_product_ID_key" ON "Eukami_v1"."Product_Modification" USING btree ("product_ID");

CREATE UNIQUE INDEX "Product_Modification_staff_ID_key" ON "Eukami_v1"."Product_Modification" USING btree ("staff_ID");

CREATE UNIQUE INDEX "Product_Product_ID_key" ON "Eukami_v1"."Product" USING btree (id);

CREATE UNIQUE INDEX "Product_pkey" ON "Eukami_v1"."Product" USING btree (id);

CREATE UNIQUE INDEX "Reviews_customer_ID_key" ON "Eukami_v1"."Review" USING btree ("customer_ID");

CREATE UNIQUE INDEX "Reviews_pkey" ON "Eukami_v1"."Review" USING btree ("customer_ID", "product_ID");

CREATE UNIQUE INDEX "Reviews_product_ID_key" ON "Eukami_v1"."Review" USING btree ("product_ID");

CREATE UNIQUE INDEX "Saved_Items_customer_ID_key" ON "Eukami_v1"."Saved_Item" USING btree ("customer_ID");

CREATE UNIQUE INDEX "Saved_Items_pkey" ON "Eukami_v1"."Saved_Item" USING btree ("customer_ID", "product_ID");

CREATE UNIQUE INDEX "Saved_Items_product_ID_key" ON "Eukami_v1"."Saved_Item" USING btree ("product_ID");

CREATE UNIQUE INDEX "Staff_email_key" ON "Eukami_v1"."Admin_User" USING btree (email);

CREATE UNIQUE INDEX "Staff_pkey" ON "Eukami_v1"."Admin_User" USING btree ("staff_ID");

CREATE UNIQUE INDEX "Staff_staff_ID_key" ON "Eukami_v1"."Admin_User" USING btree ("staff_ID");

alter table "Eukami_v1"."Admin_User" add constraint "Staff_pkey" PRIMARY KEY using index "Staff_pkey";

alter table "Eukami_v1"."Bank_account" add constraint "Bank_account_pkey" PRIMARY KEY using index "Bank_account_pkey";

alter table "Eukami_v1"."Collection" add constraint "Collections_pkey" PRIMARY KEY using index "Collections_pkey";

alter table "Eukami_v1"."Customer" add constraint "Customer_pkey" PRIMARY KEY using index "Customer_pkey";

alter table "Eukami_v1"."Order" add constraint "Order_pkey" PRIMARY KEY using index "Order_pkey";

alter table "Eukami_v1"."Product" add constraint "Product_pkey" PRIMARY KEY using index "Product_pkey";

alter table "Eukami_v1"."Product_Image" add constraint "Product_Image_pkey" PRIMARY KEY using index "Product_Image_pkey";

alter table "Eukami_v1"."Product_Modification" add constraint "Product_Modification_pkey" PRIMARY KEY using index "Product_Modification_pkey";

alter table "Eukami_v1"."Review" add constraint "Reviews_pkey" PRIMARY KEY using index "Reviews_pkey";

alter table "Eukami_v1"."Saved_Item" add constraint "Saved_Items_pkey" PRIMARY KEY using index "Saved_Items_pkey";

alter table "Eukami_v1"."Admin_User" add constraint "Staff_email_key" UNIQUE using index "Staff_email_key";

alter table "Eukami_v1"."Admin_User" add constraint "Staff_staff_ID_key" UNIQUE using index "Staff_staff_ID_key";

alter table "Eukami_v1"."Bank_account" add constraint "Bank_account_account_number_key" UNIQUE using index "Bank_account_account_number_key";

alter table "Eukami_v1"."Bank_account" add constraint "Bank_account_customer_ID_key" UNIQUE using index "Bank_account_customer_ID_key";

alter table "Eukami_v1"."Bank_account" add constraint "Bank_account_sort_code_key" UNIQUE using index "Bank_account_sort_code_key";

alter table "Eukami_v1"."Bank_account" add constraint "Eukami_v1_Bank_account_customer_ID_fkey" FOREIGN KEY ("customer_ID") REFERENCES "Eukami_v1"."Customer"("Customer_id") not valid;

alter table "Eukami_v1"."Bank_account" validate constraint "Eukami_v1_Bank_account_customer_ID_fkey";

alter table "Eukami_v1"."Collection" add constraint "Collections_collection_ID_key" UNIQUE using index "Collections_collection_ID_key";

alter table "Eukami_v1"."Customer" add constraint "Customer_email_key" UNIQUE using index "Customer_email_key";

alter table "Eukami_v1"."Order" add constraint "Eukami_v1_Orders_customer_ID_fkey" FOREIGN KEY (customer) REFERENCES "Eukami_v1"."Customer"("Customer_id") not valid;

alter table "Eukami_v1"."Order" validate constraint "Eukami_v1_Orders_customer_ID_fkey";

alter table "Eukami_v1"."Order" add constraint "Eukami_v1_Orders_product_ID_fkey" FOREIGN KEY (product) REFERENCES "Eukami_v1"."Product"(id) not valid;

alter table "Eukami_v1"."Order" validate constraint "Eukami_v1_Orders_product_ID_fkey";

alter table "Eukami_v1"."Order" add constraint "Orders_customer_ID_key" UNIQUE using index "Orders_customer_ID_key";

alter table "Eukami_v1"."Order" add constraint "Orders_product_ID_key" UNIQUE using index "Orders_product_ID_key";

alter table "Eukami_v1"."Product" add constraint "Eukami_v1_Product_collection_id_fkey" FOREIGN KEY (collection_id) REFERENCES "Eukami_v1"."Collection"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "Eukami_v1"."Product" validate constraint "Eukami_v1_Product_collection_id_fkey";

alter table "Eukami_v1"."Product" add constraint "Product_Product_ID_key" UNIQUE using index "Product_Product_ID_key";

alter table "Eukami_v1"."Product_Image" add constraint "Eukami_v1_Product_Image_product_id_fkey" FOREIGN KEY (product_id) REFERENCES "Eukami_v1"."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "Eukami_v1"."Product_Image" validate constraint "Eukami_v1_Product_Image_product_id_fkey";

alter table "Eukami_v1"."Product_Image" add constraint "Product_Image_Product_ID_key" UNIQUE using index "Product_Image_Product_ID_key";

alter table "Eukami_v1"."Product_Image" add constraint "Product_Image_image_ID_key" UNIQUE using index "Product_Image_image_ID_key";

alter table "Eukami_v1"."Product_Modification" add constraint "Eukami_v1_Product_Modification_product_ID_fkey" FOREIGN KEY ("product_ID") REFERENCES "Eukami_v1"."Product"(id) not valid;

alter table "Eukami_v1"."Product_Modification" validate constraint "Eukami_v1_Product_Modification_product_ID_fkey";

alter table "Eukami_v1"."Product_Modification" add constraint "Eukami_v1_Product_Modification_staff_ID_fkey" FOREIGN KEY ("staff_ID") REFERENCES "Eukami_v1"."Admin_User"("staff_ID") not valid;

alter table "Eukami_v1"."Product_Modification" validate constraint "Eukami_v1_Product_Modification_staff_ID_fkey";

alter table "Eukami_v1"."Product_Modification" add constraint "Product_Modification_product_ID_key" UNIQUE using index "Product_Modification_product_ID_key";

alter table "Eukami_v1"."Product_Modification" add constraint "Product_Modification_staff_ID_key" UNIQUE using index "Product_Modification_staff_ID_key";

alter table "Eukami_v1"."Review" add constraint "Eukami_v1_Reviews_customer_ID_fkey" FOREIGN KEY ("customer_ID") REFERENCES "Eukami_v1"."Customer"("Customer_id") not valid;

alter table "Eukami_v1"."Review" validate constraint "Eukami_v1_Reviews_customer_ID_fkey";

alter table "Eukami_v1"."Review" add constraint "Eukami_v1_Reviews_product_ID_fkey" FOREIGN KEY ("product_ID") REFERENCES "Eukami_v1"."Product"(id) not valid;

alter table "Eukami_v1"."Review" validate constraint "Eukami_v1_Reviews_product_ID_fkey";

alter table "Eukami_v1"."Review" add constraint "Reviews_customer_ID_key" UNIQUE using index "Reviews_customer_ID_key";

alter table "Eukami_v1"."Review" add constraint "Reviews_product_ID_key" UNIQUE using index "Reviews_product_ID_key";

alter table "Eukami_v1"."Saved_Item" add constraint "Eukami_v1_Saved_Items_customer_ID_fkey" FOREIGN KEY ("customer_ID") REFERENCES "Eukami_v1"."Customer"("Customer_id") not valid;

alter table "Eukami_v1"."Saved_Item" validate constraint "Eukami_v1_Saved_Items_customer_ID_fkey";

alter table "Eukami_v1"."Saved_Item" add constraint "Eukami_v1_Saved_Items_product_ID_fkey" FOREIGN KEY ("product_ID") REFERENCES "Eukami_v1"."Product"(id) not valid;

alter table "Eukami_v1"."Saved_Item" validate constraint "Eukami_v1_Saved_Items_product_ID_fkey";

alter table "Eukami_v1"."Saved_Item" add constraint "Saved_Items_customer_ID_key" UNIQUE using index "Saved_Items_customer_ID_key";

alter table "Eukami_v1"."Saved_Item" add constraint "Saved_Items_product_ID_key" UNIQUE using index "Saved_Items_product_ID_key";

grant delete on table "Eukami_v1"."Admin_User" to "anon";

grant insert on table "Eukami_v1"."Admin_User" to "anon";

grant references on table "Eukami_v1"."Admin_User" to "anon";

grant select on table "Eukami_v1"."Admin_User" to "anon";

grant trigger on table "Eukami_v1"."Admin_User" to "anon";

grant truncate on table "Eukami_v1"."Admin_User" to "anon";

grant update on table "Eukami_v1"."Admin_User" to "anon";

grant delete on table "Eukami_v1"."Admin_User" to "authenticated";

grant insert on table "Eukami_v1"."Admin_User" to "authenticated";

grant references on table "Eukami_v1"."Admin_User" to "authenticated";

grant select on table "Eukami_v1"."Admin_User" to "authenticated";

grant trigger on table "Eukami_v1"."Admin_User" to "authenticated";

grant truncate on table "Eukami_v1"."Admin_User" to "authenticated";

grant update on table "Eukami_v1"."Admin_User" to "authenticated";

grant delete on table "Eukami_v1"."Admin_User" to "service_role";

grant insert on table "Eukami_v1"."Admin_User" to "service_role";

grant references on table "Eukami_v1"."Admin_User" to "service_role";

grant select on table "Eukami_v1"."Admin_User" to "service_role";

grant trigger on table "Eukami_v1"."Admin_User" to "service_role";

grant truncate on table "Eukami_v1"."Admin_User" to "service_role";

grant update on table "Eukami_v1"."Admin_User" to "service_role";

grant delete on table "Eukami_v1"."Bank_account" to "anon";

grant insert on table "Eukami_v1"."Bank_account" to "anon";

grant references on table "Eukami_v1"."Bank_account" to "anon";

grant select on table "Eukami_v1"."Bank_account" to "anon";

grant trigger on table "Eukami_v1"."Bank_account" to "anon";

grant truncate on table "Eukami_v1"."Bank_account" to "anon";

grant update on table "Eukami_v1"."Bank_account" to "anon";

grant delete on table "Eukami_v1"."Bank_account" to "authenticated";

grant insert on table "Eukami_v1"."Bank_account" to "authenticated";

grant references on table "Eukami_v1"."Bank_account" to "authenticated";

grant select on table "Eukami_v1"."Bank_account" to "authenticated";

grant trigger on table "Eukami_v1"."Bank_account" to "authenticated";

grant truncate on table "Eukami_v1"."Bank_account" to "authenticated";

grant update on table "Eukami_v1"."Bank_account" to "authenticated";

grant delete on table "Eukami_v1"."Bank_account" to "service_role";

grant insert on table "Eukami_v1"."Bank_account" to "service_role";

grant references on table "Eukami_v1"."Bank_account" to "service_role";

grant select on table "Eukami_v1"."Bank_account" to "service_role";

grant trigger on table "Eukami_v1"."Bank_account" to "service_role";

grant truncate on table "Eukami_v1"."Bank_account" to "service_role";

grant update on table "Eukami_v1"."Bank_account" to "service_role";

grant delete on table "Eukami_v1"."Collection" to "anon";

grant insert on table "Eukami_v1"."Collection" to "anon";

grant references on table "Eukami_v1"."Collection" to "anon";

grant select on table "Eukami_v1"."Collection" to "anon";

grant trigger on table "Eukami_v1"."Collection" to "anon";

grant truncate on table "Eukami_v1"."Collection" to "anon";

grant update on table "Eukami_v1"."Collection" to "anon";

grant delete on table "Eukami_v1"."Collection" to "authenticated";

grant insert on table "Eukami_v1"."Collection" to "authenticated";

grant references on table "Eukami_v1"."Collection" to "authenticated";

grant select on table "Eukami_v1"."Collection" to "authenticated";

grant trigger on table "Eukami_v1"."Collection" to "authenticated";

grant truncate on table "Eukami_v1"."Collection" to "authenticated";

grant update on table "Eukami_v1"."Collection" to "authenticated";

grant delete on table "Eukami_v1"."Collection" to "service_role";

grant insert on table "Eukami_v1"."Collection" to "service_role";

grant references on table "Eukami_v1"."Collection" to "service_role";

grant select on table "Eukami_v1"."Collection" to "service_role";

grant trigger on table "Eukami_v1"."Collection" to "service_role";

grant truncate on table "Eukami_v1"."Collection" to "service_role";

grant update on table "Eukami_v1"."Collection" to "service_role";

grant delete on table "Eukami_v1"."Customer" to "anon";

grant insert on table "Eukami_v1"."Customer" to "anon";

grant references on table "Eukami_v1"."Customer" to "anon";

grant select on table "Eukami_v1"."Customer" to "anon";

grant trigger on table "Eukami_v1"."Customer" to "anon";

grant truncate on table "Eukami_v1"."Customer" to "anon";

grant update on table "Eukami_v1"."Customer" to "anon";

grant delete on table "Eukami_v1"."Customer" to "authenticated";

grant insert on table "Eukami_v1"."Customer" to "authenticated";

grant references on table "Eukami_v1"."Customer" to "authenticated";

grant select on table "Eukami_v1"."Customer" to "authenticated";

grant trigger on table "Eukami_v1"."Customer" to "authenticated";

grant truncate on table "Eukami_v1"."Customer" to "authenticated";

grant update on table "Eukami_v1"."Customer" to "authenticated";

grant delete on table "Eukami_v1"."Customer" to "service_role";

grant insert on table "Eukami_v1"."Customer" to "service_role";

grant references on table "Eukami_v1"."Customer" to "service_role";

grant select on table "Eukami_v1"."Customer" to "service_role";

grant trigger on table "Eukami_v1"."Customer" to "service_role";

grant truncate on table "Eukami_v1"."Customer" to "service_role";

grant update on table "Eukami_v1"."Customer" to "service_role";

grant delete on table "Eukami_v1"."Order" to "anon";

grant insert on table "Eukami_v1"."Order" to "anon";

grant references on table "Eukami_v1"."Order" to "anon";

grant select on table "Eukami_v1"."Order" to "anon";

grant trigger on table "Eukami_v1"."Order" to "anon";

grant truncate on table "Eukami_v1"."Order" to "anon";

grant update on table "Eukami_v1"."Order" to "anon";

grant delete on table "Eukami_v1"."Order" to "authenticated";

grant insert on table "Eukami_v1"."Order" to "authenticated";

grant references on table "Eukami_v1"."Order" to "authenticated";

grant select on table "Eukami_v1"."Order" to "authenticated";

grant trigger on table "Eukami_v1"."Order" to "authenticated";

grant truncate on table "Eukami_v1"."Order" to "authenticated";

grant update on table "Eukami_v1"."Order" to "authenticated";

grant delete on table "Eukami_v1"."Order" to "service_role";

grant insert on table "Eukami_v1"."Order" to "service_role";

grant references on table "Eukami_v1"."Order" to "service_role";

grant select on table "Eukami_v1"."Order" to "service_role";

grant trigger on table "Eukami_v1"."Order" to "service_role";

grant truncate on table "Eukami_v1"."Order" to "service_role";

grant update on table "Eukami_v1"."Order" to "service_role";

grant delete on table "Eukami_v1"."Product" to "anon";

grant insert on table "Eukami_v1"."Product" to "anon";

grant references on table "Eukami_v1"."Product" to "anon";

grant select on table "Eukami_v1"."Product" to "anon";

grant trigger on table "Eukami_v1"."Product" to "anon";

grant truncate on table "Eukami_v1"."Product" to "anon";

grant update on table "Eukami_v1"."Product" to "anon";

grant delete on table "Eukami_v1"."Product" to "authenticated";

grant insert on table "Eukami_v1"."Product" to "authenticated";

grant references on table "Eukami_v1"."Product" to "authenticated";

grant select on table "Eukami_v1"."Product" to "authenticated";

grant trigger on table "Eukami_v1"."Product" to "authenticated";

grant truncate on table "Eukami_v1"."Product" to "authenticated";

grant update on table "Eukami_v1"."Product" to "authenticated";

grant delete on table "Eukami_v1"."Product" to "service_role";

grant insert on table "Eukami_v1"."Product" to "service_role";

grant references on table "Eukami_v1"."Product" to "service_role";

grant select on table "Eukami_v1"."Product" to "service_role";

grant trigger on table "Eukami_v1"."Product" to "service_role";

grant truncate on table "Eukami_v1"."Product" to "service_role";

grant update on table "Eukami_v1"."Product" to "service_role";

grant delete on table "Eukami_v1"."Product_Image" to "anon";

grant insert on table "Eukami_v1"."Product_Image" to "anon";

grant references on table "Eukami_v1"."Product_Image" to "anon";

grant select on table "Eukami_v1"."Product_Image" to "anon";

grant trigger on table "Eukami_v1"."Product_Image" to "anon";

grant truncate on table "Eukami_v1"."Product_Image" to "anon";

grant update on table "Eukami_v1"."Product_Image" to "anon";

grant delete on table "Eukami_v1"."Product_Image" to "authenticated";

grant insert on table "Eukami_v1"."Product_Image" to "authenticated";

grant references on table "Eukami_v1"."Product_Image" to "authenticated";

grant select on table "Eukami_v1"."Product_Image" to "authenticated";

grant trigger on table "Eukami_v1"."Product_Image" to "authenticated";

grant truncate on table "Eukami_v1"."Product_Image" to "authenticated";

grant update on table "Eukami_v1"."Product_Image" to "authenticated";

grant delete on table "Eukami_v1"."Product_Image" to "service_role";

grant insert on table "Eukami_v1"."Product_Image" to "service_role";

grant references on table "Eukami_v1"."Product_Image" to "service_role";

grant select on table "Eukami_v1"."Product_Image" to "service_role";

grant trigger on table "Eukami_v1"."Product_Image" to "service_role";

grant truncate on table "Eukami_v1"."Product_Image" to "service_role";

grant update on table "Eukami_v1"."Product_Image" to "service_role";

grant delete on table "Eukami_v1"."Product_Modification" to "anon";

grant insert on table "Eukami_v1"."Product_Modification" to "anon";

grant references on table "Eukami_v1"."Product_Modification" to "anon";

grant select on table "Eukami_v1"."Product_Modification" to "anon";

grant trigger on table "Eukami_v1"."Product_Modification" to "anon";

grant truncate on table "Eukami_v1"."Product_Modification" to "anon";

grant update on table "Eukami_v1"."Product_Modification" to "anon";

grant delete on table "Eukami_v1"."Product_Modification" to "authenticated";

grant insert on table "Eukami_v1"."Product_Modification" to "authenticated";

grant references on table "Eukami_v1"."Product_Modification" to "authenticated";

grant select on table "Eukami_v1"."Product_Modification" to "authenticated";

grant trigger on table "Eukami_v1"."Product_Modification" to "authenticated";

grant truncate on table "Eukami_v1"."Product_Modification" to "authenticated";

grant update on table "Eukami_v1"."Product_Modification" to "authenticated";

grant delete on table "Eukami_v1"."Product_Modification" to "service_role";

grant insert on table "Eukami_v1"."Product_Modification" to "service_role";

grant references on table "Eukami_v1"."Product_Modification" to "service_role";

grant select on table "Eukami_v1"."Product_Modification" to "service_role";

grant trigger on table "Eukami_v1"."Product_Modification" to "service_role";

grant truncate on table "Eukami_v1"."Product_Modification" to "service_role";

grant update on table "Eukami_v1"."Product_Modification" to "service_role";

grant delete on table "Eukami_v1"."Review" to "anon";

grant insert on table "Eukami_v1"."Review" to "anon";

grant references on table "Eukami_v1"."Review" to "anon";

grant select on table "Eukami_v1"."Review" to "anon";

grant trigger on table "Eukami_v1"."Review" to "anon";

grant truncate on table "Eukami_v1"."Review" to "anon";

grant update on table "Eukami_v1"."Review" to "anon";

grant delete on table "Eukami_v1"."Review" to "authenticated";

grant insert on table "Eukami_v1"."Review" to "authenticated";

grant references on table "Eukami_v1"."Review" to "authenticated";

grant select on table "Eukami_v1"."Review" to "authenticated";

grant trigger on table "Eukami_v1"."Review" to "authenticated";

grant truncate on table "Eukami_v1"."Review" to "authenticated";

grant update on table "Eukami_v1"."Review" to "authenticated";

grant delete on table "Eukami_v1"."Review" to "service_role";

grant insert on table "Eukami_v1"."Review" to "service_role";

grant references on table "Eukami_v1"."Review" to "service_role";

grant select on table "Eukami_v1"."Review" to "service_role";

grant trigger on table "Eukami_v1"."Review" to "service_role";

grant truncate on table "Eukami_v1"."Review" to "service_role";

grant update on table "Eukami_v1"."Review" to "service_role";

grant delete on table "Eukami_v1"."Saved_Item" to "anon";

grant insert on table "Eukami_v1"."Saved_Item" to "anon";

grant references on table "Eukami_v1"."Saved_Item" to "anon";

grant select on table "Eukami_v1"."Saved_Item" to "anon";

grant trigger on table "Eukami_v1"."Saved_Item" to "anon";

grant truncate on table "Eukami_v1"."Saved_Item" to "anon";

grant update on table "Eukami_v1"."Saved_Item" to "anon";

grant delete on table "Eukami_v1"."Saved_Item" to "authenticated";

grant insert on table "Eukami_v1"."Saved_Item" to "authenticated";

grant references on table "Eukami_v1"."Saved_Item" to "authenticated";

grant select on table "Eukami_v1"."Saved_Item" to "authenticated";

grant trigger on table "Eukami_v1"."Saved_Item" to "authenticated";

grant truncate on table "Eukami_v1"."Saved_Item" to "authenticated";

grant update on table "Eukami_v1"."Saved_Item" to "authenticated";

grant delete on table "Eukami_v1"."Saved_Item" to "service_role";

grant insert on table "Eukami_v1"."Saved_Item" to "service_role";

grant references on table "Eukami_v1"."Saved_Item" to "service_role";

grant select on table "Eukami_v1"."Saved_Item" to "service_role";

grant trigger on table "Eukami_v1"."Saved_Item" to "service_role";

grant truncate on table "Eukami_v1"."Saved_Item" to "service_role";

grant update on table "Eukami_v1"."Saved_Item" to "service_role";

create policy "Enable read access for all users"
on "Eukami_v1"."Admin_User"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "Eukami_v1"."Bank_account"
as permissive
for select
to public
using (true);


create policy "Enable insert for authenticated users only"
on "Eukami_v1"."Collection"
as permissive
for all
to authenticated
with check (true);


create policy "Enable read access for all users"
on "Eukami_v1"."Collection"
as permissive
for select
to public
using (true);


create policy "Enable insert for authenticated users only"
on "Eukami_v1"."Customer"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "Eukami_v1"."Customer"
as permissive
for select
to public
using (true);


create policy "Enable insert for authenticated users only"
on "Eukami_v1"."Order"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable All for authenticated users only"
on "Eukami_v1"."Product"
as permissive
for all
to authenticated
with check (true);


create policy "Enable insert for authenticated users only"
on "Eukami_v1"."Product"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "Eukami_v1"."Product"
as permissive
for select
to anon, authenticated, service_role
using (true);


create policy "Enable insert for authenticated users only"
on "Eukami_v1"."Product_Image"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "Eukami_v1"."Product_Image"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "Eukami_v1"."Product_Modification"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "Eukami_v1"."Review"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "Eukami_v1"."Saved_Item"
as permissive
for select
to public
using (true);



create table "public"."collections" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "description" text not null default ''::text,
    "name" text not null default ''::text,
    "image" json,
    "slug" text not null,
    "updated_at" timestamp with time zone not null default now(),
    "products" bigint
);


create table "public"."customer" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "amountSpent" real not null default '0'::real,
    "displayName" text not null,
    "email" text,
    "firstName" text,
    "lastName" text,
    "numberOfOrders" integer not null default 0,
    "shippingAddress" text,
    "billingAddress" text,
    "orders" bigint
);


create table "public"."orders" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "billingAddress" text not null,
    "canceledAt" timestamp with time zone,
    "totalPrice" real not null,
    "customerUrl" text,
    "email" text not null,
    "financialStatus" text,
    "fulfillmentStatus" text not null default '"OPEN"'::text,
    "shippingAddress" text not null,
    "statusUrl" text not null default ''::text,
    "lineItems" bigint[]
);


alter table "public"."orders" enable row level security;

create table "public"."products" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "name" text not null default ''::text,
    "description" text default ''::text,
    "tags" json default '[]'::json,
    "sku" text,
    "weight" real,
    "collections" bigint,
    "availableForSale" boolean not null default true,
    "price" real not null default '0'::real,
    "salePrice" real,
    "images" json
);


CREATE UNIQUE INDEX collections_pkey ON public.collections USING btree (id);

CREATE UNIQUE INDEX customer_pkey ON public.customer USING btree (id);

CREATE UNIQUE INDEX orders_pkey ON public.orders USING btree (id);

CREATE UNIQUE INDEX products_pkey ON public.products USING btree (id);

alter table "public"."collections" add constraint "collections_pkey" PRIMARY KEY using index "collections_pkey";

alter table "public"."customer" add constraint "customer_pkey" PRIMARY KEY using index "customer_pkey";

alter table "public"."orders" add constraint "orders_pkey" PRIMARY KEY using index "orders_pkey";

alter table "public"."products" add constraint "products_pkey" PRIMARY KEY using index "products_pkey";

alter table "public"."collections" add constraint "collections_products_fkey" FOREIGN KEY (products) REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."collections" validate constraint "collections_products_fkey";

alter table "public"."customer" add constraint "customer_orders_fkey" FOREIGN KEY (orders) REFERENCES orders(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."customer" validate constraint "customer_orders_fkey";

alter table "public"."products" add constraint "products_collections_fkey" FOREIGN KEY (collections) REFERENCES collections(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."products" validate constraint "products_collections_fkey";

grant delete on table "public"."collections" to "anon";

grant insert on table "public"."collections" to "anon";

grant references on table "public"."collections" to "anon";

grant select on table "public"."collections" to "anon";

grant trigger on table "public"."collections" to "anon";

grant truncate on table "public"."collections" to "anon";

grant update on table "public"."collections" to "anon";

grant delete on table "public"."collections" to "authenticated";

grant insert on table "public"."collections" to "authenticated";

grant references on table "public"."collections" to "authenticated";

grant select on table "public"."collections" to "authenticated";

grant trigger on table "public"."collections" to "authenticated";

grant truncate on table "public"."collections" to "authenticated";

grant update on table "public"."collections" to "authenticated";

grant delete on table "public"."collections" to "service_role";

grant insert on table "public"."collections" to "service_role";

grant references on table "public"."collections" to "service_role";

grant select on table "public"."collections" to "service_role";

grant trigger on table "public"."collections" to "service_role";

grant truncate on table "public"."collections" to "service_role";

grant update on table "public"."collections" to "service_role";

grant delete on table "public"."customer" to "anon";

grant insert on table "public"."customer" to "anon";

grant references on table "public"."customer" to "anon";

grant select on table "public"."customer" to "anon";

grant trigger on table "public"."customer" to "anon";

grant truncate on table "public"."customer" to "anon";

grant update on table "public"."customer" to "anon";

grant delete on table "public"."customer" to "authenticated";

grant insert on table "public"."customer" to "authenticated";

grant references on table "public"."customer" to "authenticated";

grant select on table "public"."customer" to "authenticated";

grant trigger on table "public"."customer" to "authenticated";

grant truncate on table "public"."customer" to "authenticated";

grant update on table "public"."customer" to "authenticated";

grant delete on table "public"."customer" to "service_role";

grant insert on table "public"."customer" to "service_role";

grant references on table "public"."customer" to "service_role";

grant select on table "public"."customer" to "service_role";

grant trigger on table "public"."customer" to "service_role";

grant truncate on table "public"."customer" to "service_role";

grant update on table "public"."customer" to "service_role";

grant delete on table "public"."orders" to "anon";

grant insert on table "public"."orders" to "anon";

grant references on table "public"."orders" to "anon";

grant select on table "public"."orders" to "anon";

grant trigger on table "public"."orders" to "anon";

grant truncate on table "public"."orders" to "anon";

grant update on table "public"."orders" to "anon";

grant delete on table "public"."orders" to "authenticated";

grant insert on table "public"."orders" to "authenticated";

grant references on table "public"."orders" to "authenticated";

grant select on table "public"."orders" to "authenticated";

grant trigger on table "public"."orders" to "authenticated";

grant truncate on table "public"."orders" to "authenticated";

grant update on table "public"."orders" to "authenticated";

grant delete on table "public"."orders" to "service_role";

grant insert on table "public"."orders" to "service_role";

grant references on table "public"."orders" to "service_role";

grant select on table "public"."orders" to "service_role";

grant trigger on table "public"."orders" to "service_role";

grant truncate on table "public"."orders" to "service_role";

grant update on table "public"."orders" to "service_role";

grant delete on table "public"."products" to "anon";

grant insert on table "public"."products" to "anon";

grant references on table "public"."products" to "anon";

grant select on table "public"."products" to "anon";

grant trigger on table "public"."products" to "anon";

grant truncate on table "public"."products" to "anon";

grant update on table "public"."products" to "anon";

grant delete on table "public"."products" to "authenticated";

grant insert on table "public"."products" to "authenticated";

grant references on table "public"."products" to "authenticated";

grant select on table "public"."products" to "authenticated";

grant trigger on table "public"."products" to "authenticated";

grant truncate on table "public"."products" to "authenticated";

grant update on table "public"."products" to "authenticated";

grant delete on table "public"."products" to "service_role";

grant insert on table "public"."products" to "service_role";

grant references on table "public"."products" to "service_role";

grant select on table "public"."products" to "service_role";

grant trigger on table "public"."products" to "service_role";

grant truncate on table "public"."products" to "service_role";

grant update on table "public"."products" to "service_role";

