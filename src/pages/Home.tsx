import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineSearch } from "react-icons/ai";
import { api } from "../services/api";
import { Loader } from "../utils/Loader";
import logo from "../assets/github.png";

interface UserProps {
  avatar_url: string;
  location: string;
  name: string;
  followers: string;
  following: string;
  public_repos: string;
  bio: string;
}

export function Home() {
  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState<UserProps[]>([]);
  const [loading, setIsLoading] = useState(false);

  const matches = useMediaQuery("(min-width:600px)");

  async function getCharacters() {
    try {
      setIsLoading(true);
      const response = await api.get(`${user}`);
      if (response) {
        setUserInfo([response.data]);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Ocorreu um erro na busca");
    }
  }

  return (
    <>
      <Loader Circular={loading} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#3f3f3f",
            height: "25%",
            justifyContent: "center",
            borderRadius: "10px",
          }}
          width={matches ? "500px" : "300px"}
        >
          <Box
            component="img"
            sx={{
              height: 50,
              width: 50,
              borderRadius: "50%",
            }}
            alt="The house from the offer."
            src={logo}
          />
          <Typography
            sx={{ fontWeight: "bold", color: "#fff", marginBottom: "20px" }}
            variant="h4"
          >
            Github Profile
          </Typography>
          <Box display="flex" gap={2}>
            <TextField
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
              placeholder="Digite o nome do usuario"
              size="small"
              color="primary"
              onChange={(e) => setUser(e.target.value)}
            />
            <IconButton
              sx={{
                borderRadius: "100px",
                backgroundColor: "#ffa500",
                ":hover": { backgroundColor: "#cc8400" },
              }}
              onClick={getCharacters}
            >
              <AiOutlineSearch color="#fff" />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fff",
              justifyContent: "center",
              borderRadius: "10px",
            }}
            width={matches ? "500px" : "300px"}
          >
            {userInfo.map((item) => (
              <>
                <Box
                  component="img"
                  sx={{
                    height: 150,
                    width: 150,
                    borderRadius: "50%",
                    marginTop: "10px",
                  }}
                  alt="The house from the offer."
                  src={item.avatar_url}
                />
                <Typography sx={{ fontWeight: "bold" }} variant="h5">
                  {item.name}
                </Typography>
                <Typography variant="body1">{item.bio}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    marginBottom: "10px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                  gap={5}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }} variant="h5">
                      {item.public_repos}
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "bold", color: "#6E6E6E" }}
                      variant="body1"
                    >
                      Repositórios
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }} variant="h5">
                      {item.followers}
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "bold", color: "#6E6E6E" }}
                      variant="body1"
                    >
                      Seguidores
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }} variant="h5">
                      {item.following}
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "bold", color: "#6E6E6E" }}
                      variant="body1"
                    >
                      Seguindo
                    </Typography>
                  </Box>
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
