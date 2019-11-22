using VehicleStoreAPI.Models;
using System;
using System.Data;
using System.Diagnostics;

namespace VehicleStoreAPI.Common
{
    public static class ExceptionLogger
    {
        public static void LogException(this Exception ex)
        {
            // Get the stack trace from the given exception
            StackTrace st = new StackTrace(ex);
            int nOffset = -1;
            // check if it contains valid info
            if (st.FrameCount == 0)
            {
                // nothing found, so we create new Stack Trace
                st = new StackTrace();
                nOffset = 2;
            }
            else
            {
                nOffset = 0;
            }
            // only if we have valid offset
            CodeException codeEx = new CodeException();
            codeEx.MachineName = Environment.MachineName;
            codeEx.ExceptionTime = DateTime.Now;
            //codeEx.UserId = System.Threading.Thread.CurrentPrincipal.Identity.Name;
            if (nOffset >= 0)
            {
                // get the current frame
                StackFrame sf = st.GetFrame(nOffset);
                codeEx.MethodName = sf.GetMethod().Name;
                codeEx.ClassName = sf.GetMethod().DeclaringType.Name;
                codeEx.AssemblyName = sf.GetMethod().DeclaringType.Assembly.FullName; ;
                codeEx.AssemblyVersion = sf.GetMethod().DeclaringType.Assembly.ImageRuntimeVersion;
                codeEx.StackDump = st.ToString();
            }

            codeEx.ErrorMessage = ex.Message;

            if (ex is DataException)
            {
                DataException x = ex as DataException;
                if (x.Data != null)
                    foreach (var key in x.Data.Keys)
                    {
                        codeEx.StackDump += key + ":" + x.Data[key] + Environment.NewLine;
                    }
            }

            while (ex.InnerException != null)
            {
                codeEx.ErrorMessage += Environment.NewLine + ex.InnerException.Message;
                ex = ex.InnerException;
            }

            using (var dbContext = new VSDBContext())
            {
                dbContext.CodeExceptions.Add(codeEx);
                dbContext.SaveChanges();
            }

        }
    }
}