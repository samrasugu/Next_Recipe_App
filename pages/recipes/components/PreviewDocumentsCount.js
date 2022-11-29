import { definePreview } from "next-sanity/preview";
import { sanityClient, projectId, dataset } from "../../../lib/sanity";

const usePreview = definePreview({projectId, dataset});
export default function PreviewDocumentsCount() {
    const data = usePreview(null, query);
    return <DocumentsCount data={data}/>
}