import { Box } from "src/components/styleds/Box";
import { Button } from "src/components/styleds/Button";
import CustomModal from "src/components/modals/CustomModal";
import Typography from "src/components/Typograph";
import { useTheme } from "styled-components";

type props = {
    isOpen: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

export const DeleteModal = ({
    isOpen,
    onCancel,
    onConfirm,
  }: props) => {
    const theme = useTheme()
    
    return (
        <CustomModal isOpen={isOpen} onClose={onCancel}>
            <Typography variant="h1">Are you sure you want to delete this item?</Typography>
            <Box
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '1em',
                marginTop: theme.spacing.lg
            }}
            >
                <Button style={{ border: '1px solid gainsboro', backgroundColor: 'transparent', color: theme.colors.black}} onClick={onCancel}>Cancel</Button>
                <Button color="danger" onClick={onConfirm}>
                Delete
                </Button>
            </Box>
        </CustomModal>
    )
}

export default DeleteModal;
