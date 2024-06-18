'use client'
import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const Login = () => {

  const [loading, setLoading] = useState(false);

  return (
    <div style={{ maxWidth: '420px', margin: '96px auto' }}>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google','apple']}
        theme="light"
      />
    </div>
  );

};

export default Login;
