import { useState, useEffect, useRef } from "react";
import { Spinner } from "@nextui-org/react";
import axios from "axios";
import { useMutation } from "react-query";

import { ENDPOINTS } from "@/api/routing";
import { Card } from "@/components/Card";
import { FilterBar } from "./components/FilterBar";

import { FaArrowUp } from "react-icons/fa";

export const Explore = () => {
  const [page, setPage] = useState(2);
  const [items, setItems] = useState<any>([]);
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const exploreRef = useRef<HTMLDivElement | null>(null);

  const { mutate, isLoading } = useMutation({
    mutationFn: () => axios.get(ENDPOINTS.GET_ANNOUNCEMENT_WITH_PAGE(page)),
    onSuccess: (response) => {
      setPage(page + 1);
      Array.isArray(response.data?.data) &&
        setItems([...items, ...response.data?.data]);
    },
  });

  useEffect(() => {
    const getData = async () => {
      try {
        setFetchLoading(true);
        const response = await axios.get(
          ENDPOINTS.GET_ANNOUNCEMENT_WITH_PAGE(1)
        );
        Array.isArray(response.data?.data) && setItems(response.data?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setFetchLoading(false);
      }
    };
    getData();
  }, []);

  const handleScroll = () => {
    if (
      Math.floor(
        exploreRef.current.scrollTop + exploreRef.current.clientHeight
      ) >= exploreRef.current.scrollHeight &&
      !isLoading
    ) {
      mutate();
    }
  };

  const handleUp = () => {
    if (exploreRef.current) {
      exploreRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={exploreRef}
      className="w-full explore-height overflow-hidden overflow-y-scroll flex items-center justify-start flex-col"
      onScroll={handleScroll}
    >
      {exploreRef.current?.scrollTop >= 3000 && (
        <p
          onClick={handleUp}
          className="w-12 h-12 select-none cursor-pointer absolute bottom-3 right-3 z-50 bg-base rounded-full flex items-center justify-center box-heavy-sh"
        >
          <FaArrowUp color="white" size={17} />
        </p>
      )}
      <h1 className="w-full flex items-center justify-start font-bold text-3xl mb-7">
        Kəşt et
      </h1>
      <FilterBar />
      <div className="w-full grid grid-cols-4 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 p-5 sm:p-0 sm:gap-3">
        {items.map((item: any) => (
          <Card key={item?.id} item={item} />
        ))}
      </div>
      {fetchLoading && <Spinner />}
      {isLoading && <Spinner />}
    </div>
  );
};
