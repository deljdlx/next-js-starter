import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

import connectionSuccessImage from "../assets/images/connection-success.jpg";

export default function SignInPage() {
    const { data: session } = useSession();
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await signIn("credentials", {
            email: form.email,
            password: form.password,
            redirect: false,
        });
        if (res?.error) setMessage("Invalid email or password");
    };

    return (
        <div>
            {session ? (
                <>
                    <div className="flex justify-center items-center h-screen">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img src={connectionSuccessImage.src}/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">You are connected</h2>
                                <p>You are connected as {session.user?.email}</p>
                                <div className="card-actions justify-end">
                                    <Link href="/" className="btn btn-primary">Back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h1>Connection</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            required
                        />
                        <button type="submit">Connect</button>
                    </form>
                    {message && <p>{message}</p>}
                </>
            )}
        </div>
    );
}
