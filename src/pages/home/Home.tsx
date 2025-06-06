import AboutUs from "../../components/home/AboutUs";
import Banner from "../../components/home/Banner";
import BlogPosts from "../../components/home/BlogPosts";
import Instructors from "../../components/home/Instructors";
import OfferCourse from "../../components/home/OfferCourse";
import UpcomingEvents from "../../components/home/UpcomingEvents";
import Testimonials from "../../components/home/Testimonials";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Container from "../../components/ui/Container";
import FaqSection from "../../components/home/FaqSection";
import JoinUs from "../../components/home/JoinUs";

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <AboutUs />
        <OfferCourse />
        <WhyChooseUs />
        <Testimonials />
        <Instructors />
        <BlogPosts />
        <UpcomingEvents />
        <FaqSection />
        <JoinUs />
      </Container>
    </>
  );
};

export default Home;
