using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using WebApplication7.Models;

namespace WebApplication7.Controllers
{
    public class citiesController : Controller
    {
        private worldEntities db = new worldEntities();

        // GET: cities
        public ActionResult Index()
        {
            var city = db.city.Include(c => c.country);
            return View(city.ToList());
        }

        // GET: cities/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            city city = db.city.Find(id);
            if (city == null)
            {
                return HttpNotFound();
            }
            return View(city);
        }

        // GET: cities/Create
        public ActionResult Create()
        {
            ViewBag.CountryCode = new SelectList(db.country, "Code", "Name");
            return View();
        }

        // POST: cities/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Name,CountryCode,District,Population")] city city)
        {
            if (ModelState.IsValid)
            {
                db.city.Add(city);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CountryCode = new SelectList(db.country, "Code", "Name", city.CountryCode);
            return View(city);
        }

        // GET: cities/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            city city = db.city.Find(id);
            if (city == null)
            {
                return HttpNotFound();
            }
            ViewBag.CountryCode = new SelectList(db.country, "Code", "Name", city.CountryCode);
            return View(city);
        }

        // POST: cities/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Name,CountryCode,District,Population")] city city)
        {
            if (ModelState.IsValid)
            {
                db.Entry(city).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CountryCode = new SelectList(db.country, "Code", "Name", city.CountryCode);
            return View(city);
        }

        // GET: cities/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            city city = db.city.Find(id);
            if (city == null)
            {
                return HttpNotFound();
            }
            return View(city);
        }

        // POST: cities/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            city city = db.city.Find(id);
            db.city.Remove(city);
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