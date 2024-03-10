export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* add success page here */}
                <div className="flex-1">{children}</div>
        </div>
    );
}