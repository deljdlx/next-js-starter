import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


  if (req.method === "GET") {
    try {
      const posts = await prisma.post.findMany({
          include: {
              author: true, // ✅ Récupère aussi les infos de l’auteur
          },
      });
      return res.status(200).json(posts);
    } catch (error: any) {
        return res.status(500).json({ message: "Erreur lors de la récupération des posts : " + error.message });
    }
  }


    if (req.method === "POST") {

      const { title, content, } = req.body;
      if (!title || !content ) return res.status(400).json({
        message: "Tous les champs sont requis : " +
        "title: " + title +
        ", content:" + content
      });


      const session = await getServerSession(req, res, authOptions);
      console.log(session);
      if (!session) return res.status(401).json({
        message: "Not logged in"
      });

      if(!session.user.id) return res.status(403).json({
        message: "Invalid user"
      });

      const authorId = session.user.id;

      try {
          const post = await prisma.post.create({
              data: { title, content, authorId },
          });

          return res.status(201).json(post);
      } catch (error: any) {
          return res.status(500).json({ message: "Post creation error : " + error.message });
      }
    }

    return res.status(405).json({ message: "Méthode non autorisée" });
}
