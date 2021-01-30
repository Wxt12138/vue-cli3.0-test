var URL
if (process.env.NODE_ENV == 'development') {
  // URL = 'http://localhost:3000/api'; // 跨域请求可以在这设置
  URL = '/api';
} else if (process.env.NODE_ENV == 'production') {
  console.log('生产环境');
  URL = ''
}

export default URL;