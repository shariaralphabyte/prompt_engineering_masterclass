import React from 'react';
import { 
  Database, Share2, FileText, Send, Table, Zap, Search, Code, Braces, 
  Cpu, Layers, Lock, ShieldAlert, Globe, Activity, HardDrive, Terminal, 
  Sparkles, ShieldCheck, Box, MessageSquare, Workflow, Settings, Bot,
  MousePointer2, AlertTriangle, CheckCircle2, List, ClipboardCheck
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Database,
  Share2,
  FileText,
  Send,
  Table,
  Zap,
  Search,
  Code,
  Braces,
  Cpu,
  Layers,
  Lock,
  ShieldAlert,
  Globe,
  Activity,
  HardDrive,
  Terminal,
  Sparkles,
  ShieldCheck,
  Box,
  MessageSquare,
  Workflow,
  Settings,
  Bot,
  MousePointer2,
  AlertTriangle,
  CheckCircle2,
  List,
  ClipboardCheck
};

export const resolveIcon = (iconName: any): React.ElementType => {
  if (typeof iconName === 'string' && iconMap[iconName]) {
    return iconMap[iconName];
  }
  if (typeof iconName === 'function' || (typeof iconName === 'object' && iconName !== null)) {
    return iconName;
  }
  return HelpCircle; // Fallback
};

import { HelpCircle } from 'lucide-react';
