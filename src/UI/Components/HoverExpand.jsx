import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonial";

function HoverExpand() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="testimonial-lists">
        {testimonialData.map((item, index) => (
          <motion.div
            key={index}
            layout
            onClick={() => setActive(index)}
            onMouseOver={() => setActive(index)}
            animate={{
              flexGrow: index === active ? 1.8 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            className={`testimonial-item testimonial-item-${index + 1}`}
          >
            <div className="img-box">
              <motion.img
                src={item.img}
                animate={{ scale: index === active ? 1 : 1.3 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {index === active && (
              <AnimatePresence>
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="overlay"
                />
              </AnimatePresence>
            )}

            {index === active && (
              <motion.div
                className="content"
                initial={{
                  opacity: 0,
                  y: "100%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "tween",
                  duration: 0.4,
                }}
              >
                <>
                  <h4>{item.name}</h4>
                  <AnimatePresence>
                    <motion.p className="">
                      {item.text.split(" ").map((word, index) => (
                        <motion.span
                          key={index}
                          initial={{
                            filter: "blur(5px)",
                            opacity: 0,
                            y: 5,
                          }}
                          animate={{
                            filter: "blur(0px)",
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                            delay: 0.02 * index,
                          }}
                          className="inline-block"
                        >
                          {word}&nbsp;
                        </motion.span>
                      ))}
                    </motion.p>
                  </AnimatePresence>
                </>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="testimonial-list">
        <AnimatedTestimonialsDemo />
      </div>
    </>
  );
}

export default HoverExpand;

const testimonialData = [
  {
    img: "/public/Images/Testimonial-1.jpg",
    name: "Sarah Chen",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, corporis repellat. Quidem facilis architecto minus similique. Rerum illum quo maiores possimus laboriosam veniam vero obcaecati magni ut, deleniti omnis quis!",
  },
  {
    img: "/public/Images/Testimonial-2.jpg",
    name: "James Kim",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, corporis repellat. Quidem facilis architecto minus similique. Rerum illum quo maiores possimus laboriosam veniam vero obcaecati magni ut, deleniti omnis quis!",
  },
  {
    img: "/public/Images/Testimonial-3.jpg",
    name: "Michael Rodriguez",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, corporis repellat. Quidem facilis architecto minus similique. Rerum illum quo maiores possimus laboriosam veniam vero obcaecati magni ut, deleniti omnis quis!",
  },
  {
    img: "/public/Images/Testimonial-4.jpg",
    name: "Emily Watson",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, corporis repellat. Quidem facilis architecto minus similique. Rerum illum quo maiores possimus laboriosam veniam vero obcaecati magni ut, deleniti omnis quis!",
  },
];
