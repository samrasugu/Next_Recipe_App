import {
    createClient,
    // createPreviewSubscriptionHook,
    // createImageUrlBuilder,
    // definePreview,
    // createPortableTextComponent
} from "next-sanity";

import { PortableText as PortableTextComponent } from '@portabletext/react';

import {definePreview} from 'next-sanity/preview';

import createImageUrlBuilder from '@sanity/image-url';

const config = {
    projectId: "tsemppiw",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: false,
};

export const projectId = 'tsemppiw';
export const dataset = 'production';

export const sanityClient = createClient(config);

export const usePreviewSubscription = definePreview(config);

export function PreviewDocumentsCount() {
    const data = usePreviewSubscription(null, query);
    return <DocumentsCount data={data}/>
}

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// export const PorTableText = PortableTextComponent({
//     ...config,
//     serializers: {},
// });

export const PortableText = (config) => <PortableTextComponent components={{
    // ...config,
}} {...config} />