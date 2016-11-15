using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using WebApplication7.Models;

namespace WebApplication7.Controllers
{
    public class countrylanguagesController : Controller
    {
        private worldEntities db = new worldEntities();

        // GET: countrylanguages
        public ActionResult Index()
        {
            var countrylanguage = db.countrylanguage.Include(c => c.country);
            return View(countrylanguage.ToList());
        }

        // GET: countrylanguages/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            countrylanguage countrylanguage = db.countrylanguage.Find(id);
            if (countrylanguage == null)
            {
                return HttpNotFound();
            }
            return View(countrylanguage);
        }

        // GET: countrylanguages/Create
        public ActionResult Create()
        {
            ViewBag.CountryCode = new SelectList(db.country, "Code", "Name");
            return View();
        }

        // POST: countrylanguages/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "CountryCode,Language,IsOfficial,Percentage")] countrylanguage countrylanguage)
        {
            if (ModelState.IsValid)
            {
                db.countrylanguage.Add(countrylanguage);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CountryCode = new SelectList(db.country, "Code", "Name", countrylanguage.CountryCode);
            return View(countrylanguage);
        }

        // GET: countrylanguages/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            countrylanguage countrylanguage = db.countrylanguage.Find(id);
            if (countrylanguage == null)
            {
                return HttpNotFound();
            }
            ViewBag.CountryCode = new SelectList(db.country, "Code", "Name", countrylanguage.CountryCode);
            return View(countrylanguage);
        }

        // POST: countrylanguages/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "CountryCode,Language,IsOfficial,Percentage")] countrylanguage countrylanguage)
        {
            if (ModelState.IsValid)
            {
                db.Entry(countrylanguage).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CountryCode = new SelectList(db.country, "Code", "Name", countrylanguage.CountryCode);
            return View(countrylanguage);
        }

        // GET: countrylanguages/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            countrylanguage countrylanguage = db.countrylanguage.Find(id);
            if (countrylanguage == null)
            {
                return HttpNotFound();
            }
            return View(countrylanguage);
        }

        // POST: countrylanguages/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            countrylanguage countrylanguage = db.countrylanguage.Find(id);
            db.countrylanguage.Remove(countrylanguage);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}