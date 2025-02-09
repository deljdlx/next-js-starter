// 📂 pages/api/signup.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return res.status(405).json({ message: "Méthode non autorisée" });

    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email et mot de passe requis" });

    // check if user already exists
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) return res.status(400).json({ message: "Email déjà utilisé" });


    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({ data: { email, password: hashedPassword } });



    return res.status(201).json({ message: "Utilisateur inscrit avec succès !" });
}
