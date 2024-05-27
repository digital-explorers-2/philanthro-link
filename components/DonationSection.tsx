"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Search, Bookmark } from "lucide-react";
import { Input } from "./ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { formatDate } from "@/lib/utils";
import { DonationsObject } from "@/app/page";
import { useRouter } from "next/navigation";

type Props = {
  donations: DonationsObject;
  categories: Category[];
};

function DonationSection({ donations, categories }: Props) {
  const pageOffset = 6;
  const [page, setPage] = React.useState(1);
  const totalPages = Math.ceil(donations.count / pageOffset);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const element = document.getElementById("donations");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Element not found");
    }
  };

  return (
    <div className="p-6 bg-gray-100" id="donations">
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center font-dm-sans mb-10">
          <span className="text-black">Open</span>
          <span className="text-primary"> donations</span>
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-[800px] h-[55px] flex items-center border border-gray-300 rounded-full p-2 shadow-lg">
            <Input
              type="text"
              placeholder="Find donations..."
              className="flex-grow outline-none border-none bg-transparent rounded-full text-gray-500"
            />
            <Button
              variant="outline"
              size="icon"
              className="rounded-full ml-2 hover:border-primary"
            >
              <Search className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center mb-14">
          <div className="w-full max-w-[970px] flex flex-wrap justify-center gap-2">
            {categories.map(({ id, name }) => (
              <Button
                variant="custom"
                key={id}
                className="rounded-full px-4 py-1"
              >
                {name}
              </Button>
            ))}
          </div>
        </div>

        {donations.donations.length > 0 ? (
          <>
            <div className="flex justify-center">
              <div className="w-full max-w-[970px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {donations.donations.map((donation) => (
                  <div
                    key={donation.id}
                    className="w-full bg-white shadow-md rounded-lg flex flex-col"
                  >
                    <img
                      src={donation.descriptions.image ?? "/no-img.jpg"}
                      alt="Floods"
                      className="w-full h-[210px] object-cover rounded-t-lg"
                    />
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-bold">{donation.title}</h3>
                        <span className="text-gray-500 text-sm">
                          {formatDate(donation.created_at)}
                        </span>
                      </div>
                      <p className="text-gray-500 mb-4">
                        {donation.descriptions.subtitle}
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-primary">
                          Raised:{" "}
                          <span className="text-gray-500">{`${donation.amount_currency} ${donation.amount_received}`}</span>
                        </span>
                        <span className="text-primary">
                          Goal:{" "}
                          <span className="text-gray-500">{`${donation.amount_currency} ${donation.amount_needed}`}</span>
                        </span>
                      </div>
                      <div className="mt-2">
                        <Progress
                          value={
                            (donation.amount_received /
                              donation.amount_needed) *
                            100
                          }
                          className="h-2 bg-gray-200 rounded-full"
                        >
                          <div className="h-full bg-primary rounded-full"></div>
                        </Progress>
                        <div className="text-xs text-gray-500 mt-1">
                          Raised by <span className="text-primary">56</span>{" "}
                          people in <span className="text-primary">15</span>{" "}
                          days
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-4 p-4">
                      <Button
                        variant="custom"
                        size="icon"
                        className="rounded-md mr-2"
                      >
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button variant="custom" className="flex-grow rounded-md">
                        Donate now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Pagination className="mt-10">
              <PaginationContent>
                {page > 1 && (
                  <PaginationItem>
                    <PaginationPrevious
                      href={`?page=${page - 1}`}
                      onClick={() => handlePageChange(page - 1)}
                    />
                  </PaginationItem>
                )}

                {Array.from(
                  { length: Math.min(totalPages - page + 1, 3) },
                  (_, i) => page + i
                ).map((pageNumber) => (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href={`/?page=${pageNumber}`}
                      isActive={pageNumber === page}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {page < totalPages - 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                {page < totalPages && (
                  <PaginationItem>
                    <PaginationNext
                      href={`?page=${page + 1}`}
                      onClick={() => handlePageChange(page + 1)}
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </>
        ) : (
          <div className="flex justify-center">
            <p className="text-lg text-gray-500">No donations found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DonationSection;

// TODO: Add raised by X people in Y days
// TODO: Add pagination, search, and category filtering
// FIXME: make pagination smooth and safe
