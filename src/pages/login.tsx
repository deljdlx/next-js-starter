import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
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
        if (res?.error) setMessage("Email ou mot de passe incorrect.");
    };

    return (
        <div>
            {session ? (
                <>
                    <p>Connecté en tant que {session.user?.email}</p>
                    <button onClick={() => signOut()}>Se déconnecter</button>
                </>
            ) : (
                <>
                    <h1>Connexion</h1>
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
                        <button type="submit">Se connecter</button>
                    </form>
                    {message && <p>{message}</p>}
                </>
            )}
        </div>
    );
}
