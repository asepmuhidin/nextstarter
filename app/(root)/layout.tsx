import Navbar from "../components/Navbar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>)    
{
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar/>
            {children}
        </main>
    );
} 