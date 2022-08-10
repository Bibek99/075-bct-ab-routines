import moment from "moment";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Date from "../components/Date";
import { useRoutine } from "../services/routine";
import classname from "classname";
import Routine from "../components/Routine";
import { useAssessmentTable } from "../services/assessmentTable";
import AssessmentsTable from "../components/AssessmentsTable";
import { useQueryClient, QueryCache } from "@tanstack/react-query";

const Home: NextPage = () => {
  const [today, setToday] = useState(moment().format("YYYY-MM-DD").toString());
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD").toString()
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { data, isLoading } = useRoutine(selectedDate);
  const { data: assessmentsData, isLoading: isAssessmentsLoading } =
    useAssessmentTable();

  console.log(selectedDate);
  return (
    <>
      <Head>
        <title>Class Routines - 075BCTAB</title>
      </Head>
      <header className="h-[256px] bg-black px-6 py-12">
        <div className="max-w-5xl margin-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-slate-50 text-4xl font-medium">
              {moment(selectedDate).format("MMMM")}
            </h2>
            <div className="flex grow justify-center space-x-12">
              <Date
                day={moment().format("DD")}
                type={selectedDate === today ? "primary" : "secondary"}
                label="TODAY"
                onClick={() => {
                  setSelectedDate(moment().format("YYYY-MM-DD").toString());
                }}
              />
              <span className="border-r-2 border-slate-500"></span>
              <Date
                day={moment(today).add(1, "days").format("DD")}
                type={
                  selectedDate ===
                  moment().add(1, "days").format("YYYY-MM-DD").toString()
                    ? "primary"
                    : "secondary"
                }
                label="TOMORROW"
                onClick={() => {
                  setSelectedDate(
                    moment().add(1, "days").format("YYYY-MM-DD").toString()
                  );
                }}
              />
            </div>
          </div>
        </div>
      </header>
      <section className="max-w-5xl margin-auto py-12">
        <div className="flex space-x-12">
          <p
            className={classname(
              "text-lg font-medium cursor-pointer",
              selectedIndex === 0
                ? "underline text-teal-500 underline-offset-8 decoration-2"
                : ""
            )}
            onClick={() => setSelectedIndex(0)}
          >
            Class Routine
          </p>
          <p
            className={classname(
              "text-lg font-medium cursor-pointer",
              selectedIndex === 1
                ? "underline text-teal-500 underline-offset-8 decoration-2"
                : ""
            )}
            onClick={() => setSelectedIndex(1)}
          >
            Assessments
          </p>
        </div>
      </section>
      <section className="max-w-5xl margin-auto">
        {selectedIndex === 0 && <Routine data={data} isLoading={isLoading} />}
        {selectedIndex === 1 && (
          <AssessmentsTable
            data={assessmentsData}
            isLoading={isAssessmentsLoading}
          />
        )}
      </section>
    </>
  );
};

export default Home;
