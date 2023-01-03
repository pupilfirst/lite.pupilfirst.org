import universities from "/data/universities.json";
import institutes from "/data/institutes.json";
import facultyGuides from "/data/faculty_guides.json";
import hiringNetwork from "/data/hiring_network.json";
import industryTeachingFellows from "/data/industry_teaching_fellows.json";
import learnerShowcase from "/data/learner_showcase.json";
import newsFeed from "/data/news_feed.json";
import researchers from "/data/researchers.json";
import studentTeachingAssistants from "/data/student_teaching_assistants.json";
import wdStats from "/data/wd_stats.json";
import summary from "/data/summary.json";

export const facultyGuidesList = facultyGuides;
export const hiringNetworkList = hiringNetwork;
export const industryTeachingFellowsList = industryTeachingFellows;
export const learnerShowcaseList = learnerShowcase;
export const newsFeedList = newsFeed;
export const researchersList = researchers;
export const studentTeachingAssistantsList = studentTeachingAssistants;
export const wdStatsData = wdStats;

let findValueFromSummary = (key) => {
  return summary.find((s) => s.key === key);
};

export const dashboardData = () => {
  return {
    totalStudents: Object.values(wdStatsData["total_students"][0])[0],
    activeStudents: Object.values(wdStatsData["active_students"][0])[0],
    velocity: Object.values(wdStatsData["velocity"][0])[0],
    reviews: Object.values(wdStatsData["reviews"][0])[0],
    submission_pending_reviews: Object.values(
      wdStatsData["pending_submissions"][0]
    )[0],
    total_submissions: Object.values(wdStatsData["total_submissions"][0])[0],
    last_updated_at: wdStatsData["last_updated_at"]["datetime"],
  };
};

export const findUniqueCount = (array) => {
  return [...new Set(array)].length;
};

export const overallStats = () => {
  let statesCount = findUniqueCount(institutes.map((i) => i["state"]));

  return {
    states: statesCount,
    universities: universities.length,
    institutes: institutes.length,
    facultyGuides: facultyGuides.length,
    hiringNetwork: hiringNetwork.length,
    industryTeachingFellows: industryTeachingFellows.length,
    researchers: researchers.length,
    studentTeachingAssistants: studentTeachingAssistants.length,
  };
};

export const courseSummary = () => {
  let courseSummaryData = wdStats["courses"].map((course) => {
    let s = Object.values(course);

    return {
      key: s[0],
      count: s[1],
    };
  });

  let staticCourseSummary = [
    "internships_and_ta",
    "industry_placements",
    "alumni_and_teaching",
  ]
    .map((key) => {
      let item = findValueFromSummary(key);
      if (item) {
        return {
          key: item["description"],
          count: item["count"],
        };
      }
    })
    .filter((n) => n);

  return courseSummaryData.concat(staticCourseSummary);
};

export const institutesList = institutes.map((institute) => {
  const university = universities.find(
    (university) => university.key === institute.university_key
  );
  return {
    ...institute,
    university: university,
  };
});

export const universitiesList = universities;

export const findInstitute = (slug) => {
  const institute = institutesList.find((institute) => institute.key === slug);
  return institute;
};

export const findUniversity = (slug) => {
  const university = universitiesList.find(
    (university) => university.key === slug
  );
  return university;
};

export const findInstitutes = (universitySlug) => {
  const institutes = institutesList.filter(
    (institute) => institute.university_key === universitySlug
  );
  return institutes;
};
