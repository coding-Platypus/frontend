import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img
        className="home-img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/UK_COVID19_Prime_FT_XSite_HeroTALL_1500x600._CB419556475_.jpg"
        alt="amazon-banner"
      />
      <div className="home-row">
        <Product
          id="12321342"
          title="Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That The Poor And Middle Class Do Not!: (25th Anniversary Edition) Mass Market Paperback "
          price={383}
          rating={4}
          image="https://miro.medium.com/max/6048/1*--VRmQUK6o6ekCcvSSitHg.jpeg"
        />
        <Product
          id="12321341"
          title="Ikigai: The Japanese secret to a long and happy life [Hardcover] "
          price={333}
          rating={5}
          image="https://booksavenuesg.files.wordpress.com/2018/03/https_2f2fcdn-holly.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="12321351"
          title="boAt Stone 180 5W Bluetooth Speaker with Upto 10 Hours Playback, 1.75 Driver, IPX7 & TWS Feature(Blue)"
          price={999}
          rating={5}
          image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjorFV4IdbgEqNFYu568svtdCxYaIzyz3Rr72BOhbKki-41dwCG-9nuxplG4HPfrrlrpgg96g8D0OgjJfMEkzjfdsP_Y62ZNFa5cajYgUwmIhREgfT347WZTE4omtNfyxmCrjHyvpBbm8rEoZQBD1YYfkVZ8utfOSWVOWvJG4u8mNX4xEp1p3uWFGH7/s320/boAt%20Stone%20180%205W%20Bluetooth%20Speaker%20with%20Upto%2010%20Hours%20Playback,%201.75_%20Driver,%20IPX7%20&%20TWS%20Feature(Blue).jpg"
        />
        <Product
          id="12321352"
          title="Fire-Boltt Phoenix Smart Watch with Bluetooth Calling 1.3"
          price={1799}
          rating={3}
          image="https://m.media-amazon.com/images/I/41M2Cle2zNL._SL500_.jpg"
        />
        <Product
          id="12321353"
          title="boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with mic, 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance "
          price={1499}
          rating={4}
          image="https://th.bing.com/th/id/OIP.5xLu_E8Uz8nPyDrgqHe94AAAAA?pid=ImgDet&rs=1"
        />
      </div>
      <div className="home-row">
        <Product
          id="12321361"
          title="Apple 2021 iMac with 4.5K Retina Display (24-inch/60.96 cm, M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB) - Silver "
          price={119990}
          rating={5}
          image="https://i.ytimg.com/vi/gcGx3RhuD70/maxresdefault.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
