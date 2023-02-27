import { Box } from "@mui/material"
import { Button } from "@mui/material"
import SelectField from "../components/SelectField"
import TextFieldcomp from "../components/TextFieldcomp";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { CircularProgress, Typography } from "@mui/material"
const Settings = () => {

    const { response, error, loading } = useAxios({ url: "/api_category.php" })
    const navigate = useNavigate();
    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )

    }
    if (error) {
        return (
            <Typography variant="h6" mt={20} color="red">Some Went Wrong!</Typography>
        )
    }

    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
    ]

    const typeOptions = [
        { id: "multiple", name: "Multiple Choise" },
        { id: "boolean", name: "True/False" },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/questions");
    };

    return (
        <form onSubmit={handleSubmit}>
            <SelectField options={response.trivia_categories} label="Category" />
            <SelectField options={difficultyOptions} label="Diffculty" />
            <SelectField options={typeOptions} label="Type" />
            <TextFieldcomp />
            <Box mt={3} width="100%">
                <Button fullWidth variant="Conatined" type="submit">
                    Get Started
                </Button>
            </Box>
        </form>

    )
}

export default Settings

















