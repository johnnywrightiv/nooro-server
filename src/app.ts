import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', taskRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
