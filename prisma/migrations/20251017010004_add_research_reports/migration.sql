-- CreateTable
CREATE TABLE "ResearchReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "urls" TEXT,
    "socialHandles" TEXT,
    "nicheData" TEXT,
    "context" TEXT,
    "focusAreas" TEXT,
    "depth" TEXT,
    "report" TEXT NOT NULL,
    "summary" TEXT,
    "opportunities" TEXT,
    "processingTime" INTEGER,
    "tokensUsed" INTEGER,
    "userId" TEXT
);

-- CreateIndex
CREATE INDEX "ResearchReport_createdAt_idx" ON "ResearchReport"("createdAt");

-- CreateIndex
CREATE INDEX "ResearchReport_type_idx" ON "ResearchReport"("type");

-- CreateIndex
CREATE INDEX "ResearchReport_status_idx" ON "ResearchReport"("status");
