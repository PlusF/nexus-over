import { prisma } from '@/lib/prisma';
import { AudienceEntry } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<AudienceEntry[]>) {
    if (!req.method) {
        return res.status(405).end();
    }
    if (req.method.toLocaleLowerCase() == 'get') {
        const audienceEntryList: AudienceEntry[] = await prisma.audienceEntry.findMany();
        res.status(200).json(audienceEntryList);
    } else if (req.method.toLocaleLowerCase() == 'post') {
        const { generation, genre, name } = req.body;
        if (!generation || !genre || !name) {
            return res.status(400).end();
        }
        const response = await prisma.audienceEntry.create({
            data: {
                generation,
                genre,
                name,
            },
        });
        return res.status(201).json([response]);
    } else {
        return res.status(405).end();
    }
}
