import React, { useState } from "react";
import {
  Container, Typography, TextField, Button, Paper, Grid, Box,
  IconButton, Snackbar, Alert
} from "@mui/material";
import {
  Mail, Phone, LocationOn, Twitter, Instagram, LinkedIn
} from "@mui/icons-material";
import { motion } from "framer-motion";
import styles from "../styles/pages/ContactUs.module.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenSnackbar(true);
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="lg" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          {/* First Card - Contact Information */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className={styles.contactCard}>
              <Typography variant="h5" gutterBottom>
                Get in Touch
              </Typography>
              
              <Box className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Email
                  </Typography>
                  <Typography>vaibhavkr387@gmail.com</Typography>
                </Box>
              </Box>

              <Box className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Phone
                  </Typography>
                  <Typography>+91................</Typography>
                </Box>
              </Box>

              <Box className={styles.contactItem}>
                <LocationOn className={styles.contactIcon} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Address
                  </Typography>
                  <Typography>
                    Mahavir Mandir, Near Patna Junction Railway Station,
                    Station Road, Patna, Bihar 800001, India
                  </Typography>
                </Box>
              </Box>

              {/* Map */}
              <Box className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.849391148872!2d85.13502847519293!3d25.61444967756927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58569d485a51%3A0x3ceb873b3e1e4458!2sMahavir%20Mandir%2C%20Patna%20Junction!5e0!3m2!1sen!2sin!4v1682841015977!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mahavir Mandir Map"
                />
              </Box>
            </Paper>
          </Grid>

          {/* Second Card - Connect & Feedback Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className={styles.contactCard}>
              <Typography variant="h5" gutterBottom>
                Connect With Us On
              </Typography>

              <Box className={styles.socialLinks}>
                <IconButton
                  href="https://www.linkedin.com/in/vaibhav-kumar-227475289"
                  target="_blank"
                  className={styles.socialIcon}
                  aria-label="LinkedIn"
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href="https://x.com/vaibhavkr473"
                  target="_blank"
                  className={styles.socialIcon}
                  aria-label="Twitter"
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/vaibhav_razz_22/"
                  target="_blank"
                  className={styles.socialIcon}
                  aria-label="Instagram"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  href="mailto:vaibhavkr387@gmail.com?subject=Query%20about%20QuizMaster&body=Hi%20Vaibhav%2C%0A%0AI%20would%20like%20to%20connect%20regarding%20QuizMaster.%0A%0ABest%20regards"
                  target="_blank"
                  className={styles.socialIcon}
                  aria-label="Email"
                >
                  <Mail />
                </IconButton>
              </Box>

              <Typography variant="h5" gutterBottom className={styles.formTitle}>
                Send Us a Message
              </Typography>

              <form onSubmit={handleSubmit} action="https://formspree.io/f/mpwpgwkj" method="POST">
                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <TextField
                  fullWidth
                  label="Email"
                  margin="normal"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <TextField
                  fullWidth
                  label="Message"
                  margin="normal"
                  multiline
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={styles.submitButton}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactUs;
