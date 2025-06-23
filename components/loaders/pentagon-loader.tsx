"use client"

import { Box } from "@mui/material"
import { motion } from "framer-motion"

const PentagonLoader = () => {
  // Define the positions for the 10 small pentagons
  const pentagonPositions = [
    { x: 50, y: 0 }, // Top center
    { x: 80, y: 30 }, // Top right
    { x: 65, y: 70 }, // Bottom right
    { x: 35, y: 70 }, // Bottom left
    { x: 20, y: 30 }, // Top left
    { x: 50, y: 20 }, // Inner top
    { x: 65, y: 40 }, // Inner top right
    { x: 50, y: 60 }, // Inner bottom
    { x: 35, y: 40 }, // Inner top left
    { x: 50, y: 40 }, // Center
  ]

  // Animation variants for the small pentagons
  const pentagonVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "200px",
        height: "200px",
        margin: "auto",
      }}
    >
      {pentagonPositions.map((position, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            top: `${position.y}%`,
            left: `${position.x}%`,
            transform: "translate(-50%, -50%)",
            width: "20px",
            height: "20px",
          }}
          variants={pentagonVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: index * 0.1 }}
        >
          <div
            className="w-full h-full bg-gradient-to-br from-blue-400 to-violet-500"
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))",
            }}
          />
        </motion.div>
      ))}
    </Box>
  )
}

export default PentagonLoader
