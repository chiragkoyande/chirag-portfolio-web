import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://kpbnjqlsahkbynpjomrs.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface SupabaseResource {
    id: string;
    title: string;
    type: 'VIDEO' | 'ARTICLE' | 'NOTE';
    url: string;
    description: string | null;
    date_added: string;
}

// Fetch all resources
export const fetchResources = async (): Promise<SupabaseResource[]> => {
    const { data, error } = await supabase
        .from('resources')
        .select('*')
        .order('date_added', { ascending: false });

    if (error) {
        console.error('Error fetching resources:', error);
        return [];
    }

    return data || [];
};

// Add a new resource
export const addResource = async (resource: Omit<SupabaseResource, 'id' | 'date_added'>): Promise<boolean> => {
    const { error } = await supabase
        .from('resources')
        .insert([resource]);

    if (error) {
        console.error('Error adding resource:', error);
        return false;
    }

    return true;
};

// Delete a resource
export const deleteResource = async (id: string): Promise<boolean> => {
    const { error } = await supabase
        .from('resources')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting resource:', error);
        return false;
    }

    return true;
};
