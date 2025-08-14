import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  CircularProgress,
  InputAdornment
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Inventory as InventoryIcon
} from '@mui/icons-material';
import { drugService } from '../../services/drugService';
import { authService } from '../../services/authService';

const DrugList = () => {
  const navigate = useNavigate();
  const [drugs, setDrugs] = useState([]);
  const [filteredDrugs, setFilteredDrugs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteDialog, setDeleteDialog] = useState({ open: false, drug: null });
  const isAdmin = authService.isAdmin();

  useEffect(() => {
    fetchDrugs();
  }, []);

  useEffect(() => {
    const filtered = drugs.filter(drug =>
      drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drug.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDrugs(filtered);
  }, [drugs, searchTerm]);

  const fetchDrugs = async () => {
    try {
      setLoading(true);
      const data = await drugService.getAllDrugs();
      setDrugs(data);
    } catch (error) {
      setError('Failed to load drugs');
      console.error('Drug list error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await drugService.deleteDrug(deleteDialog.drug.id);
      setDrugs(drugs.filter(d => d.id !== deleteDialog.drug.id));
      setDeleteDialog({ open: false, drug: null });
    } catch (error) {
      setError('Failed to delete drug');
      console.error('Delete drug error:', error);
    }
  };

  const handleStockUpdate = async (drugId, newQuantity) => {
    try {
      await drugService.updateStock(drugId, newQuantity);
      setDrugs(drugs.map(d => 
        d.id === drugId ? { ...d, quantity: newQuantity } : d
      ));
    } catch (error) {
      setError('Failed to update stock');
      console.error('Stock update error:', error);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Drugs</Typography>
        {isAdmin && (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('/drugs/add')}
          >
            Add Drug
          </Button>
        )}
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search drugs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 3 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Grid container spacing={3}>
        {filteredDrugs.map((drug) => (
          <Grid item xs={12} sm={6} md={4} key={drug.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h6" component="div">
                    {drug.name}
                  </Typography>
                  {isAdmin && (
                    <Box>
                      <IconButton
                        size="small"
                        onClick={() => navigate(`/drugs/edit/${drug.id}`)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => setDeleteDialog({ open: true, drug })}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  )}
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {drug.description}
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" color="primary">
                    ${drug.price}
                  </Typography>
                  <Chip
                    icon={<InventoryIcon />}
                    label={`Stock: ${drug.quantity}`}
                    color={drug.quantity > 0 ? 'success' : 'error'}
                    variant="outlined"
                  />
                </Box>

                {isAdmin && drug.quantity > 0 && (
                  <Button
                    variant="outlined"
                    size="small"
                    fullWidth
                    onClick={() => handleStockUpdate(drug.id, drug.quantity - 1)}
                  >
                    Reduce Stock
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredDrugs.length === 0 && !loading && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6" color="text.secondary">
            No drugs found
          </Typography>
        </Box>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, drug: null })}>
        <DialogTitle>Delete Drug</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "{deleteDialog.drug?.name}"? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ open: false, drug: null })}>
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DrugList;
