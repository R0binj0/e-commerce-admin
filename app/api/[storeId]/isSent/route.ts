import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;
    const { isSent } = req.body;

    await prisma.order.update({
      where: { id: orderId },
      data: { isSent },
    });

    res.status(200).json({ message: 'Update successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
