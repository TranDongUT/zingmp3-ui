import style from "./Player.module.scss";
import classNames from "classnames/bind";

//component
import Controler from "./Controler";

const cx = classNames.bind(style);

const LIST_SONG = [
  {
    name: "Bài Này Chill Phết",
    singer: "Đen ft. Min",
    path: "https://tainhacmienphi.biz/get/song/api/304067",
    image: "https://data.chiasenhac.com/data/cover/143/142394.jpg",
  },
  {
    name: "Ngày lang Thang",
    singer: "Đen",
    path: "https://tainhacmienphi.biz/get/song/api/27135",
    image:
      "https://thumb.guucdn.net/webp/640x360/image-tmp.guu.vn/full/2017/08/14/8a3ab0cc5aee6ec8cb0c07f3943826ac7cb8a528.jpg",
  },
  {
    name: "Hai Triệu Năm",
    singer: "Đen ft. Biên",
    path: "https://aredir.nixcdn.com/NhacCuaTui985/HaiTrieuNam-DenBien-6007307.mp3?st=mY9vEjzGZEIIL94N-bx5IQ&e=1633934412",
    image:
      "https://cdn.24h.com.vn/upload/2-2019/images/2019-06-21/1561134836-52-den-vau-hai-trieu-nam-19-1561080590-width1277height692.jpg",
  },
  {
    name: "Đưa Nhau Đi Trốn",
    singer: "Đen ft. Linh Cáo",
    path: "https://aredir.nixcdn.com/NhacCuaTui906/DuaNhauDiTronChillVersion-DangCapNhat-4110390.mp3?st=QKqlgxbHq2GDjDNrA3RmJQ&e=1633933039",
    image: "https://i.ytimg.com/vi/5e7e_KZINA4/maxresdefault.jpg",
  },
  {
    name: "Cho Mình Em",
    singer: "Binz ft. Đen",
    path: "https://aredir.nixcdn.com/NhacCuaTui1013/ChoMinhEm-BinzDen-6985340.mp3?st=7RIHaHwisNo0GOFnBSrokQ&e=1633934737",
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/57/a0/1c/57a01ce3-ccd7-491f-2417-bff12894c455/190296717017.jpg/400x400cc.jpg",
  },
  {
    name: "Tình Nhân Ơi",
    singer: "Binz, Orange ft. Superbrothers",
    path: "https://aredir.nixcdn.com/NhacCuaTui974/TinhNhanOi-SuperbrothersOrangeBinz-5831772.mp3?st=hxe782u7le1mOTRy0EeLNw&e=1633929025",
    image: "https://i1.sndcdn.com/artworks-000465863538-lkylo8-t500x500.jpg",
  },
  {
    name: "Thiên Đàng",
    singer: "Wowy",
    path: "https://tainhac123.com/listen/thien-dang-live-wowy-ft-pham-dang-anh-thu.84Rw2hR69oN3.html",
    image:
      "https://image-us.24h.com.vn/upload/4-2020/images/2020-11-04/Loi-cam-on-tu-poster-final--1604480007-890-width660height849.jpg",
  },
  {
    name: "Chỉ Là Muốn Nói",
    singer: "Khải",
    path: "https://aredir.nixcdn.com/NhacCuaTui1013/ChiLaMuonNoi1-Khai-6992852.mp3?st=wrid2_CTjl85P-5zfpoS0w&e=1633961684",
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/0d/f8/aa/0df8aaab-948d-407f-edf2-1703442a1654/Chi_La_Muon_Noi_art.jpg/400x400cc.jpg",
  },
  {
    name: "Flying In The Deep Night",
    singer: "Onew (SHINee) ft. Lee Suhyun (AKMU)",
    path: "https://f9-stream.nixcdn.com/NhacCuaTui1022/FlyingInTheDeepNightSeaOfHope-OnewSHINeeLeeSuhyunAKMU-7092742.mp3?st=rZ8p0MJMAfDBX42n3y_TdA&e=1633961850",
    image: "https://i.ytimg.com/vi/bbqouI107CE/hqdefault.jpg",
  },
  {
    name: "Me To You, You To Me",
    singer: "Scenery of Riding Bicycle",
    path: "https://aredir.nixcdn.com/NhacCuaTui097/Metoyouyoutome-SceneryofRidingB_mxfu.mp3?st=XGvrG2WXjr8ANqOs6zi4Uw&e=1633961945",
    image:
      "https://kgasa.com/wp-content/uploads/2020/05/Hospital-Playlist-OST-Part-12.jpg",
  },
  {
    name: "Trap",
    singer: "Henry",
    path: "https://aredir.nixcdn.com/NhacCuaTui959/Trap-HenrySuperJuniorMKyuHyunSuperJuniorTaeMinSHINee-2583728.mp3?st=EtCX3258J9cMIZua9CRiMA&e=1633957287",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ff/f6/37/fff637f3-a72a-ebf6-bb22-c1e8b28687b2/asset.jpg/400x400cc.jpg",
  },
];

function Player() {
  return (
    <div className={cx("wrapper")}>
      {/* button */}
      <div className={cx("controler")}>{<Controler data={LIST_SONG} />}</div>
      {/* process */}
      <div className={cx("process")}>
        <span>00:09</span>
        <input
          className={cx("range")}
          type="range"
          min="0"
          max="100"
          step="1"
        />
        <span>05:00</span>
      </div>
    </div>
  );
}

export default Player;
