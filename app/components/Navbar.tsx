import Link from "next/link";
import Image
 from "next/image";
import { auth,signOut, signIn } from "@/auth";


export default async function Navbar() {

    const session=await auth();
    
    console.log(`Username ${session?.user?.name}`);

    return (
        <header className="px-4 py-2 bg-slate-900  shadow-sm font-work-sans text-white">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/N2.png" alt="muhidin" className="w-16 h-16 rounded-full" width={48} height={48} />
                </Link>
                <div className="flex gap-5">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    {
                        session && session.user?.name ? (
                            <>
                                <Link href="/blog/create">
                                    <span>Create</span>
                                </Link>

                                <form action={async()=>{
                                    "use server";
                                    await signOut({redirectTo: '/'});
                                }}>
                                    <button type="submit" >Logout</button>
                                </form>

                                <Link href={`user/${session?.user?.id}`}>
                                    <span>{`${session?.user?.name}`}</span>
                                </Link>
                            </>
                        ):
                        (
                           
                           <form 
                            action ={async ()=>{
                                "use server";
                                await signIn('github');    
                            }}>
                            <button type="submit">Login</button>
                           </form>
                                        
                           
                        ) 

                    }
                </div>
            </nav>
        </header>
    )   
}