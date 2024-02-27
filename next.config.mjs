/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // Opcionalmente, puedes especificar un pathname para restringir aún más las rutas de acceso permitidas
        // pathname: '/tu-subdominio/*',
      },
    ],
  },};

export default nextConfig;
