import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cardAnimation } from "../../components/ui/Animation";
import Container from "../../components/ui/Container";
import Titles from "../../components/utils/Titles";

const Blogs = () => {
  return (
    <section className="lg:py-16 py-12 px-3 bg-blue-50">
      <Container>
        <Titles title="Latest Blog Posts" />

        <div className="flex flex-wrap justify-between gap-5 mt-12">
          {[
            {
              path: "/blog/soft-skills-career-success",
              title:
                "Why Soft Skills Are the Secret Ingredient to Career Success",
              date: "June 5, 2025",
              image:
                "https://www.careerbright.com/wp-content/uploads/2020/05/soft-skills.jpg",
              summary:
                "Discover why communication, teamwork, and emotional intelligence matter just as much as technical skills in today’s competitive job market.",
            },
            {
              path: "/blog/spss-basics",
              title:
                "Getting Started with SPSS: A Beginner’s Guide to Data Analysis",
              date: "June 6, 2025",
              image:
                "https://th.bing.com/th/id/R.a86a1de4674724601415b260cec6e3c0?rik=ErKknum4Bgs7MA&riu=http%3a%2f%2fphuongphapnghiencuu.com%2fwp-content%2fuploads%2f2020%2f10%2fspss.jpg&ehk=vt8Gc1roC7xeWuTZKshVooSp07pYxfX%2bBWYWqHhqOvg%3d&risl=&pid=ImgRaw&r=0",
              summary:
                "Uncover the fundamentals of SPSS and learn how this tool empowers researchers and students to interpret data with confidence.",
            },
            {
              path: "/blog/ielts-prep-guide",
              title:
                "Mastering IELTS: Proven Strategies to Boost Your Band Score",
              date: "June 7, 2025",
              image:
                "https://blog.edx.org/hubfs/Imported_Blog_Media/IELTSx-intro-shot-1.jpg",
              summary:
                "Explore effective IELTS tips, practice strategies, and preparation techniques to help you ace your test and achieve your dream score.",
            },
            {
              path: "/blog/education-innovation",
              title: "Innovating Education: The Role of Tech in Learning Today",
              date: "June 8, 2025",
              image:
                "https://studyinnc.com/wp-content/uploads/EDUC1-1024x576.png",
              summary:
                "From AI tutors to gamified classrooms, discover how technology is transforming education and helping learners reach new heights.",
            },
          ].map((blog) => (
            <motion.div
              key={blog.path}
              className="card w-full md:w-[49%] bg-base-100 shadow-sm p-0 group"
              variants={cardAnimation}
              initial="initial"
              whileInView="whileInView"
              transition={cardAnimation.transition}
              viewport={{ once: true }}
            >
              <figure className="h-52 overflow-hidden rounded-t-xl">
                <img
                  src={blog.image}
                  alt="Blog Cover"
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="p-6">
                <Link
                  to={blog.path}
                  className="block text-2xl font-semibold text-gray-800 hover:text-pink-600  transform transition duration-300 group-hover:scale-105 mb-1"
                >
                  {blog.title}
                </Link>
                <p className="text-sm text-gray-600 mt-1">
                  {blog.date} · by Admin
                </p>
                <p className="text-gray-700 mt-4">{blog.summary}</p>

                <div className="card-actions justify-end mt-4">
                  <Link to={blog.path} className="btn text-pink-600 btn-link">
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
