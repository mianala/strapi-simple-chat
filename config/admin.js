module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4901e368251e6bd6919958b6450b414c'),
  },
});
