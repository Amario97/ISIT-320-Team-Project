/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
              key: 'Access-Control-Allow-Headers',
              value: 'Authorization',
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'POST, OPTIONS',
            },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig