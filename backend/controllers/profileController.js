import { supabase } from '../config/supabase.js';

export const getProfile = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('profile')
      .select('*')
      .single();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('profile')
      .upsert(req.body)
      .select()
      .single();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
