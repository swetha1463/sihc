import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getDomainIntelligence, detectAdvancedThreats, mapCybercrimeNetworks } from '../realtime_domain_intelligence';

function App() {
  const [data, setData] = useState([]);
  const [prediction, setPrediction] = useState(null);
 
