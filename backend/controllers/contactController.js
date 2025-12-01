import { supabase } from '../config/supabase.js';

export const submitContact = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert(req.body)
      .select()
      .single();

    if (error) throw error;

    res.json({ success: true, data, message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
