import { motion } from "framer-motion";
import {
  typingChar,
  typingContainer,
  underlineAnimation,
} from "../../components/ui/Animation";
import Container from "../../components/ui/Container";

const team = [
  {
    name: "AZM Fuad",
    role: "Founder",
    image:
      "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/503975769_1966657414162237_8254215407222366073_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3ZOu022TVTUQ7kNvwE2Gy8v&_nc_oc=AdmoDIaqjJLyrfyJXWuEz0NULLqfFwDWwTEWaxnS6sm8gcciPHhRRkWbRNli8YbyBdg&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=qQzVlo0xEhODHGJjwM2MWA&oh=00_AfPyTCkmfTfnydV_ebXR6kVgDX1AMNuF-F5Jw886nWcBcA&oe=68483545",
    linkedin: "https://www.linkedin.com/in/fuadpablo",
  },
  {
    name: "Ayesha Khan",
    role: "Curriculum Designer",
    // image: team2,
    linkedin: "#",
  },
  {
    name: "Saroar Jahan",
    role: "IT Leader",
    image:
      "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/481822607_122141300468521269_7108119095072123501_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SuxNI4JRXy0Q7kNvwGba8WQ&_nc_oc=Admtuwjd3uzT0-aPgmLyQ2wHkIfz0hmMw4ghBVsbyedpQpsZL_-MBFSToQpZqWitVdg&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=i0b1BmmXIic0cA5SGLw2tA&oh=00_AfMJVmf3CAxd6iyDxlgOxD17npwRFIV2XQrKhOx5-6nBEg&oe=68484A95",
    linkedin: "https://linkedin.com/in/saroar-in",
  },
];
const title = "Meet the Team";

const Team = () => {
  return (
    <Container className="w-full mx-auto">
      <motion.h2
        variants={typingContainer}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-12"
      >
        {title.split("").map((char, index) => (
          <motion.span key={index} variants={typingChar}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}

        <motion.div
          className="h-1 bg-pink-600 rounded-full mt-2 mx-auto"
          style={{ maxWidth: "200px" }}
          variants={underlineAnimation}
          initial="hidden"
          animate="visible"
        />
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow p-6 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-pink-600 hover:underline text-sm mt-2 inline-block"
            >
              View LinkedIn
            </a>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Team;
