import { Button, ButtonGroup } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "../App";

const LogInButtons = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box>
      <Text textAlign="center">{`Logged In: ${user.loggedIn}`}</Text>
      <ButtonGroup>
        <Button
          onClick={() => {
            if (user.loggedIn) return;
            setUser({ loggedIn: true });

            if (location.state?.from) {
              navigate(location.state.from);
            }
          }}
        >
          Log In
        </Button>
        <Button
          onClick={() => {
            if (!user.loggedIn) return;
            setUser({ loggedIn: false });
          }}
        >
          Log Out
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default LogInButtons;
