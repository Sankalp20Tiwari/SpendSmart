/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname:"randomuser.me"
            },
            {
                protocol: 'https',
                hostname:"images.unsplash.com"
            },
            {
                protocol: 'https',
                hostname:"images.pexels.com"
            },
            {
                protocol:'https',
                hostname:"static.vecteezy.com"
            }
        ]
    },

    experimental:{
        serverActions:{
            bodySizeLimit: "5mb"
        }
    }
};

export default nextConfig;
