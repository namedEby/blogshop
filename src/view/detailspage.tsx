import React, { useEffect } from "react";
import { blogdetailimage1, blogimage1 } from "../assets";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux";
import { FETCH_BLOG_DETAIL } from "../redux/auth/actions/blog";

import CommentCard from "../components/commentcard";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { setNavbarText } from "../redux/auth";

const Detailspage = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useAppDispatch();
  const navigateTo = useNavigate();
  const postdetail = useAppSelector((state) => state.auth.POSTDETAIL);
  
  var htmlContent = "";
  if (postdetail.hasOwnProperty("content")) {
    htmlContent = "";
  }
  useEffect(() => {
    if (id != undefined) dispatch(FETCH_BLOG_DETAIL({ post_id: id }));
    else console.log("id undefined");
    dispatch(setNavbarText({text:"MY DAILY SKIN CARE ROUTINE"}))
  }, []);
  return (
    <div>
      <Navbar/>
      <div className="p-[100px] bg-secondary w-screen h-full flex flex-col items-center">
        <div className="relative rounded-lg">
          <img
            src={blogdetailimage1}
            className="justify-self-center w-[90em]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
        </div>
        <div className="prose mt-10 text-primary font-thin font-source-code-pro ">
          <div
            dangerouslySetInnerHTML={{
              __html: `
  <p>
    <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. <em>Sed nec odio</em> vestibulum, aliquet nisi eu,
    ullamcorper mauris. <u>Curabitur aliquet</u> enim sit amet tellus maximus interdum.
    <code>Proin hendrerit</code> est non justo suscipit, ac aliquam mi accumsan.
    <mark>Nullam sit</mark> amet ex sem. <small>Phasellus</small> luctus nisi et urna tristique, et rhoncus lacus finibus.
    <sup>Quisque</sup> quis nisl a elit congue luctus. <sub>Vivamus</sub> vulputate tortor eget magna elementum congue.
    <del>Morbi sagittis</del> nulla a mi pulvinar eleifend.
  </p>
  <p>
    <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. <em>Praesent sagittis</em> orci a libero iaculis,
    et finibus purus fringilla. <u>Duis tincidunt</u> risus sed purus interdum cursus.
    <code>Vivamus vitae</code> orci accumsan, scelerisque metus a, <mark>ultrices mauris</mark>.
    <small>Phasellus</small> lobortis fermentum est id dictum. <sup>Curabitur</sup> malesuada nunc vitae nulla ullamcorper
    lobortis. <sub>Vivamus malesuada</sub> leo eget leo blandit, vitae laoreet lorem volutpat.
    <del>Etiam ac</del> pretium elit. <ins>Mauris in</ins> erat nec dui auctor sagittis.
  </p>
  <p>
    <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. <em>Sed nec odio</em> vestibulum, aliquet nisi eu,
    ullamcorper mauris. <u>Curabitur aliquet</u> enim sit amet tellus maximus interdum.
    <code>Proin hendrerit</code> est non justo suscipit, ac aliquam mi accumsan.
    <mark>Nullam sit</mark> amet ex sem. <small>Phasellus</small> luctus nisi et urna tristique, et rhoncus lacus finibus.
    <sup>Quisque</sup> quis nisl a elit congue luctus. <sub>Vivamus</sub> vulputate tortor eget magna elementum congue.
    <del>Morbi sagittis</del> nulla a mi pulvinar eleifend.
  </p>
  <p>
    <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. <em>Praesent sagittis</em> orci a libero iaculis,
    et finibus purus fringilla. <u>Duis tincidunt</u> risus sed purus interdum cursus.
    <code>Vivamus vitae</code> orci accumsan, scelerisque metus a, <mark>ultrices mauris</mark>.
    <small>Phasellus</small> lobortis fermentum est id dictum. <sup>Curabitur</sup> malesuada nunc vitae nulla ullamcorper
    lobortis. <sub>Vivamus malesuada</sub> leo eget leo blandit, vitae laoreet lorem volutpat.
    <del>Etiam ac</del> pretium elit. <ins>Mauris in</ins> erat nec dui auctor sagittis.
  </p>
`,
            }}
          />
        </div>
        <div className="w-full mt-20">
          <CommentCard />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Detailspage;
