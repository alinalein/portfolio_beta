export type WorkItem = {
    id: string;
    imgSrc: string;
    title: string;
    description: string;
    features: readonly string[];
    linkGit: string;
    linkLive?: string;
    linkCase?: string;
    languagesUsed: string[];
    images: string[];
}
