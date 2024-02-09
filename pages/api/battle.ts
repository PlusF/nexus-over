import { BattleEntry, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<BattleEntry[]>) {
    if (!req.method) {
        return res.status(405).end();
    }
    if (req.method.toLocaleLowerCase() == 'get') {
        const battleEntryList: BattleEntry[] = await prisma.battleEntry.findMany();
        res.status(200).json(battleEntryList);
    } else if (req.method.toLocaleLowerCase() == 'post') {
        const { generation, genre, name, dancerName } = req.body;
        if (!generation || !genre || !name || !dancerName) {
            return res.status(400).end();
        }
        const response = await prisma.battleEntry.create({
            data: {
                generation,
                genre,
                name,
                dancerName,
            },
        });
        return res.status(201).json([response]);
    } else {
        return res.status(405).end();
    }
}
