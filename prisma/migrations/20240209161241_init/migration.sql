-- CreateTable
CREATE TABLE "BattleEntry" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "generation" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dancerName" TEXT NOT NULL,

    CONSTRAINT "BattleEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AudienceEntry" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "generation" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AudienceEntry_pkey" PRIMARY KEY ("id")
);
