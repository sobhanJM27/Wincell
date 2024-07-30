import { useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { Article, Course } from "../../types/apiTypes";
import { editArticle } from "../../api/article";
import { editCourse } from "../../api/course";
const Edit = () => {
  const { parent } = useParams();
  const location = useLocation();
  const queryClient = useQueryClient();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const shortTextRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const imagesRef = useRef<HTMLInputElement | null>(null);
  const categoryRef = useRef<HTMLInputElement | null>(null);
  const sortRef = useRef<HTMLInputElement | null>(null);
  const { token } = useAuth();
  const auth = useAuthHooks();

  if (parent === "Articles") {
    const details = location.state as Article;

    const editArticleMutation = useMutation({
      mutationFn: (id: string) =>
        editArticle({ token, ...auth }, id, {
          short_text: shortTextRef.current!.value,
          title: titleRef.current!.value,
          category: "",
          images: imagesRef.current?.value.split(",") || [],
          author: {
            image: "",
            name: "Udemy",
          },
          description: textRef.current!.value,
          sortByNumber: Number(sortRef.current!.value),
        }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["articles"] });
        toast.success("موفقیت آمیز");
      },
      onError: (err) => {
        toast.error("خطا در برقراری ارتباط");
        console.log(err);
      },
    });
    return (
      <div className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="title"
          defaultValue={details.title}
          ref={titleRef}
        />
        <input
          type="text"
          placeholder="متنی کوتاه برای نمایش در کنار سر تیتر"
          defaultValue={details.short_text}
          ref={shortTextRef}
        />
        <textarea
          placeholder="مقاله ی خود را در فرمت مارکداون بنویسید"
          cols={30}
          rows={10}
          defaultValue={details.description}
          ref={textRef}
        ></textarea>
        <button
          className="bg-pink max-w-fit"
          disabled={editArticleMutation.isPending}
          onClick={() => {
            editArticleMutation.mutate(details._id);
          }}
        >
          تایید
        </button>
      </div>
    );
  } else if (parent === "Courses") {
    const priceRef = useRef<HTMLInputElement | null>(null);
    const discountRef = useRef<HTMLInputElement | null>(null);
    const typeRef = useRef<HTMLSelectElement | null>(null);
    const levelRef = useRef<HTMLSelectElement | null>(null);
    const spotRef = useRef<HTMLInputElement | null>(null);
    const details = location.state as Course;

    const editCourseMutation = useMutation({
      mutationFn: (id: string) =>
        editCourse({ token, ...auth }, id, {
          short_text: shortTextRef.current!.value,
          title: titleRef.current!.value,
          category: categoryRef.current!.value,
          images: imagesRef.current?.value.split(",") || [],
          discount: Number(discountRef.current!.value),
          level: levelRef.current!.value,
          price: Number(priceRef.current!.value),
          type: typeRef.current!.value as "online" | "offline",
          spotPlayerID: spotRef.current!.value,
          Description: textRef.current!.value,
          language: "",
          neededTime: {
            hour: 0,
            minute: 0,
          },
          owner: {
            image: "",
            name: "Udemy",
          },
          prerequisitesTxt: "",
          prerequisites: [],
          sortByNumber: Number(sortRef.current!.value),
        }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["courses"] });
        toast.success("موفقیت آمیز");
      },
      onError: () => {
        toast.error("خطا در برقراری ارتباط");
      },
    });
    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4"></div>
        <input
          type="text"
          placeholder="title"
          defaultValue={details.title}
          ref={titleRef}
        />
        <input
          type="text"
          placeholder="متنی کوتاه برای نمایش در کنار سر تیتر"
          defaultValue={details.short_text}
          ref={shortTextRef}
        />
        <textarea
          placeholder="توضیحات دوره خود را در فرمت مارکداون بنویسید"
          cols={30}
          rows={10}
          defaultValue={details.Description}
          ref={textRef}
        ></textarea>
        <input
          type="number"
          placeholder="قیمت اصلی دوره"
          defaultValue={details.price}
          ref={priceRef}
        />
        <input
          type="number"
          placeholder="تخفیف"
          defaultValue={details.discount}
          ref={discountRef}
        />
        <select ref={typeRef} defaultValue={details.type}>
          <option value="offline">اسپات پلیر</option>
          <option value="online">انلاین</option>
        </select>
        <select ref={levelRef} defaultValue={details.level}>
          <option value="مبتدی">مبتدی</option>
          <option value="متوسط">متوسط</option>
          <option value="پیشرفته">پیشرفته</option>
        </select>
        <input
          type="text"
          placeholder="ایدی اسپات پلیر"
          ref={spotRef}
          defaultValue={details.spotPlayerID}
        />
        <button
          className="bg-pink max-w-fit"
          disabled={editCourseMutation.isPending}
          onClick={() => {
            editCourseMutation.mutate(details._id);
          }}
        >
          تایید
        </button>
      </div>
    );
  }
};

export default Edit;
