import React from "react";
import AnimalsRow from "./AnimalsRow";

const list1=[ "https://hanoispiritofplace.com/wp-content/uploads/2014/08/hinh-nen-cac-loai-chim-dep-nhat-1-1.jpg",
"https://toigingiuvedep.vn/wp-content/uploads/2021/10/hinh-anh-chim-chao-mao-dep-hot-hay-va-thu-hut-nhat.jpg",
"https://recmiennam.com/wp-content/uploads/2018/03/hinh-anh-chim-dep-5.jpg",
"https://img2.thuthuatphanmem.vn/uploads/2018/12/25/cach-chon-chim-hoa-mi_011902609.jpeg",
"https://file.vfo.vn/hinh/2018/02/chim-hoa-mi-hinh-anh-hinh-nen-chim-hoa-mi-dep-nhat-de-thuong-1.png",
"https://thuthuatnhanh.com/wp-content/uploads/2019/04/hinh-anh-nhung-loai-chim-dep-nhat-the-gioi_chim_mong_bien.jpg",
"https://file.vfo.vn/hinh/2018/02/chim-chao-mao-hinh-anh-hinh-nen-chim-chao-mao-dep-nhat-1.png",
"https://photo-cms-giaoduc.zadn.vn/w700/Uploaded/2022/erncldxwp/2012_07_11/chim1-giaoducvietnam.jpg",
"https://media.baoquangninh.com.vn/dataimages/201111/original/images617061_a.jpeg",
"https://cdn.pixabay.com/photo/2019/10/20/14/49/animal-4563886__480.jpg",
"https://hinhnen123.com/wp-content/uploads/2021/10/Tong-hop-60-hinh-anh-con-chim-dep-nhat-the-gioi-32.jpg",
"https://anhdep123.com/wp-content/uploads/2020/10/anh-chim-gay-dep.jpg",
"https://sudospaces.com/gaocung-com/2021/01/chim-vang-anh-an-gi-1.jpg"
]

const list2=["http://image.vtc.vn/files/f1/2016/05/29/10-buc-anh-dep-lung-linh-ve-the-gioi-dong-vat-duoi-bien-0.jpg",
"https://media.vov.vn/uploaded/rftwybrxfmly8uzveukg/2018_11_25/1_qfsi.jpg",
"https://texturegen.com/wp-content/uploads/2018/01/anh-dong-vat-bien-dep.jpg",
"https://photo-cms-anninhthudo.zadn.vn/w600/Uploaded/2022/206/2020_03_11/ve-dep-den-me-man-cua-mot-so-loai-sinh-vat-bien_5.jpg",
"https://giaovienvietnam.com/hinh-anh-tieng-anh/wp-content/uploads/2018/01/hinh-anh-tieng-anh-cho-tre-ten-cac-loai-dong-vat-bien-phan-2-410x400.jpg",
"https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2020/04/29/Anh-dong-vat-Thuy-quai-phat-sang-duoi-bien-sau_1.jpg",
"https://kenh14cdn.com/k:thumb_w/600/6lnffOHA9gPXbn4CuEkXJZ6Pdcccc/Image/2014/11/Tuan-2/1-a1722/ve-dep-dung-toc-gay-cua-cac-loai-sinh-vat-duoi-long-dai-duong.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8boDbxLN5vpTTqKFgH-3r94vkRyeRhDTQgg&usqp=CAU",
"https://c.wallhere.com/photos/26/a1/photography_nature_animals_shark-286171.jpg!d",
"https://tepbac.com/upload/news/ge_image/2019/09/sinh-vat-6_SUTR_1568116191.jpg",
"https://admin.kalzen.com/upload/tiengtrung/images/2017/11/%C4%90%E1%BB%98NG-V%E1%BA%ACT-BI%E1%BB%82N.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhJW5TsMY3R1a04n54F8jSgM-w03qPH9b-A&usqp=CAU"
 ]

const list3=[ "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/300px-Lion_%28Panthera_leo%29_male_6y.jpg",
"https://media.vov.vn/uploaded/4bpdy3ykolq/2019_09_08/a2_huha.jpg",
"https://anh.24h.com.vn/upload/1-2014/images/2014-02-22/1393039555-dong-vat-hoang-da--1-.jpg",
"https://cdnimg.vietnamplus.vn/uploaded/izhsa/2016_12_08/giraffesstandoff.jpg",
"https://media.vov.vn/uploaded/4bpdy3ykolq/2019_09_08/a9_qluf.jpg",
"https://cdn.pixabay.com/photo/2016/07/23/10/26/wildlife-1536579_960_720.jpg",
"https://media.vietravel.com/images/NewsPicture/4-kenya-2.jpg",
"https://moitruong.com.vn/Upload/top%20dong%20vat3.jpg",
"http://khoahocphattrien.vn/Images/Uploaded/Share/2015/12/02/22.jpg",
"https://image.tienphong.vn/w665/Uploaded/2019/qhj_hiobgobrfc/2019_09_09/greaterkudu_uclm.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Chimpanzee_%2813968481823%29.jpg/300px-Chimpanzee_%2813968481823%29.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ic2SJJw_lCE9dl3gLgPKgr1NfNpT6F_2yw&usqp=CAU",
"https://i.pinimg.com/originals/cd/58/8b/cd588b17ddd02bdb3a14607796ab9d1c.jpg",

]

const list4 = [ "https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/nguyenlap/2016_07_28/cuc-dep-hinh-anh-nhung-dong-vat-quy-hiem-nhat-the-gioi-hinh-3.jpg",
"https://kenh14cdn.com/Images/Uploaded/Share/2011/07/30/4d5110730kpdongvatquyhiem1.jpg",
"https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/luuthoa/2018_01_02/3/dong-vat_itxq.jpg",
"https://cand.com.vn/Files/Image/hientk/2020/07/02/2de048d5-bf09-401b-b90d-f7bffe1560fc.jpg",
"https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/nguyenlap/2016_07_28/cuc-dep-hinh-anh-nhung-dong-vat-quy-hiem-nhat-the-gioi-hinh-5.jpg",
"https://cdnmedia.baotintuc.vn/Upload/WAUNT4irib2FkZZd1qOA/files/2021/01/6/culi-612021.jpg",
"https://bcp.cdnchinhphu.vn/Uploaded/nguyenthiphuongmai/2021_09_22/dongvatqh.jpg",
"https://image.bnews.vn/MediaUpload/Org/2016/03/04/151622_dong-vat-hoang-da.jpg",
"https://file1.dangcongsan.vn/DATA/0/2016/02/saola1-10_15_17_009.jpg",
"https://cms.luatvietnam.vn/uploaded/Images/Original/2018/11/07/dong-vat-hoang-da_0711093243.jpg",
"http://khoahocphattrien.vn/Images/Uploaded/Share/2016/03/01/Nhung-dong-vat-bi-bach-tang-quy-hiem-nhat-tren-the-gioi_3.jpg",
"https://image.vtc.vn/resize/th/upload/2021/03/10/dong-vat-quy-hiem-7-08413527.jpg",
"https://cdnimg.vietnamplus.vn/uploaded/qfsqy/2021_03_04/vooc_mui_hech.jpg"

]

function Content(props) {
    return (
        <div>
            <AnimalsRow animals={list1} title="List of birds" />
            <AnimalsRow animals={list2} title="List of Sea, Ocean and Water Animals" />
            <AnimalsRow animals={list3} title="List of African animals" />
            <AnimalsRow animals={list4} title="List of rarest animals" />
        </div>

    )
}

export default Content;