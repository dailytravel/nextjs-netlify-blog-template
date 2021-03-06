import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h2>
            Daily Group
          </h2>
          <p>Daily Group là đơn vị quản lý thuộc tổng công ty Daily Travel với vốn điều lệ 100 tỷ đồng gồm 12 đơn vị thành viên hoạt động trong các lĩnh vực du lịch, nhà hàng & khách sạn, thực phẩm, đồ uống, ô tô, xuất nhập khẩu và xây dựng, năng lượng bao gồm:</p>
          <ul>
            <li>Daily Travel</li>
            <li>Daily Deal (Groupon)</li>
            <li>Daily Spring (Soft drinks water)</li>
            <li>Daily Suite (Enterprise Solutions)</li>
            <li>Daily Logistics (Import & Export)</li>
            <li>Daily Community (uid.one)</li>
            <li>Daily Auto</li>
            <li>Daily Solar</li>
            <li>Daily Food</li>
            <li>Daily Homes</li>
            <li>Daily Hotels</li>
          </ul>
          <img src="/together.jpg" alt="together" width="100%"/>
          <h3>
            Liên hệ
          </h3>
          <p>Trụ sở: 210 Diệp Minh Châu, Đà Nẵng - Điện thoại: 0236.3551.555 - Email: info@dailygroup.info</p>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
