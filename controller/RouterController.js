import Trade from "../Models/trade.js";

export const MakePostController = async (req, res) => {
  try {
    const { shares, type } = req.body;

    // Validate shares and type
    if (shares < 1 || shares > 100 || !["buy", "sell"].includes(type)) {
      return res.status(400).json({ error: "Invalid shares or trade type" });
    }

    const trade = await Trade.create(req.body);
    res.status(201).json(trade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const GetController = async (req, res) => {
  try {
    const { type, user_id } = req.query;
    const query = {};
    if (type) query.type = type;
    if (user_id) query.user_id = user_id;

    const trades = await Trade.find(query).sort({ id: "asc" });

    res.status(200).json(trades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const GetTradesIdController = async (req, res) => {
  try {
    const trade = await Trade.findById(req.params.id);
    if (trade) {
      res.status(200).json(trade);
    } else {
      res.status(404).send("ID not found");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
